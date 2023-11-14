import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';
import { apiKey } from '../../api/apiKey';
import { Status, StatusCode } from '../../enum/status';
import { ICurrentForecast, IMultidayForecast } from '../../interfaces/weather';
import { RootState } from '../store';
import { IWeatherResponseCurrentData, IWeatherResponseData } from '../../interfaces/apiResponses';
import { firstArrayItem } from '../../data/constants';
import { StatusRequest } from '../../types/statusRequest';

type InitialState = {
	status: StatusRequest,
	error: string | null,
	weatherMultiday: IMultidayForecast | null,
	weatherCurrent: ICurrentForecast | null,
};

const initialState: InitialState = {
	status: Status.Loading,
	error: null,
	weatherMultiday: null,
	weatherCurrent: null,
};

export const fetchMultidayWeather = createAsyncThunk(
	'weather/fetchMultidayWeather',
	async function(_, {rejectWithValue, getState}) {
		const state: RootState = getState() as RootState;
		const coords = state.location.currentCity;

		try {
			const response: IWeatherResponseData = await api.get(`/data/2.5/forecast?lat=${coords?.latitude}&lon=${coords?.longitude}&appid=${apiKey}&units=metric&lang=en`);

			if(response.status < StatusCode.Successful
				|| response.status >= StatusCode.Redirection) {
				throw new Error('Error! Try later.');
			}

			// const result: IMultidayForecast = response.data.map(item => {
			// 	return {
			// 		temperature: response.data.main.temp,
			// 		feelsLike: response.data.main.feels_like,
			// 		minTemperature: response.data.main.temp_min,
			// 		maxTemperature: response.data.main.temp_max,
			// 		pressure: response.data.main.pressure,
			// 		humidity: response.data.main.humidity,
			// 		weatherCode: response.data.weather[firstArrayItem].id,
			// 		weatherDescription: response.data.weather[firstArrayItem].description,
			// 		windSpeed: response.data.wind.speed,
			// 		windDirection: response.data.wind.deg,
			// 		windGust: response.data.wind.gust,
			// 		datatime: response.data.dt,
			// 		visibility: response.data.visibility,
			// 		clouds:  response.data.clouds.all,
			// 		sunrise: response.data.sys.sunrise,
			// 		sunset: response.data.sys.sunset,
			// 		timezone: response.data.timezone
			// 	}
			// })

			return {

			};

		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const fetchCurrentWeather = createAsyncThunk(
	'weather/fetchCurrentWeather',
	async function(_, { rejectWithValue, getState}) {
		const state: RootState = getState() as RootState;
		const coords = state.location.currentCity;

		try {
			const response: IWeatherResponseCurrentData = await api.get(`/data/2.5/weather?lat=${coords?.latitude}&lon=${coords?.longitude}&appid=${apiKey}&units=metric&lang=ua`);

			if(response.status < StatusCode.Successful
				|| response.status >= StatusCode.Redirection) {
				throw new Error('Error! Try later.');
			}

			return {
				temperature: response.data.main.temp,
				feelsLike: response.data.main.feels_like,
				minTemperature: response.data.main.temp_min,
				maxTemperature: response.data.main.temp_max,
				pressure: response.data.main.pressure,
				humidity: response.data.main.humidity,
				weatherCode: response.data.weather[firstArrayItem].id,
				weatherDescription: response.data.weather[firstArrayItem].description,
				windSpeed: response.data.wind.speed,
				windDirection: response.data.wind.deg,
				windGust: response.data.wind.gust,
				datatime: response.data.dt,
				visibility: response.data.visibility,
				clouds:  response.data.clouds.all,
				sunrise: response.data.sys.sunrise,
				sunset: response.data.sys.sunset,
				timezone: response.data.timezone
			}
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {

    },
	extraReducers: {
		[fetchCurrentWeather.pending.type]: (state: InitialState) => {
			state.status = Status.Loading;
			state.error = null;
		},
		[fetchCurrentWeather.fulfilled.type]: (state: InitialState,
																					 action: PayloadAction<ICurrentForecast>) => {
			state.status = Status.Resolved;
			state.weatherCurrent = action.payload;
		},
		[fetchCurrentWeather.rejected.type]: (state: InitialState,
																					action: PayloadAction<Error>) => {
			state.status = Status.Rejected;
			state.error = action.payload.message;
		},

		[fetchMultidayWeather.pending.type]: (state: InitialState) => {
			// state.status = Status.Loading;
			// state.error = null;
		},
		[fetchMultidayWeather.fulfilled.type]: (state: InitialState,
																						action) => {
			// state.status = Status.Resolved;
			// state.characters = action.payload.characters;
		},
		[fetchMultidayWeather.rejected.type]: (state: InitialState,
																					 action) => {
			// state.status = Status.Rejected;
			// state.error = action.payload.message;
		},

	},
});

export const {

} = weatherSlice.actions;

export default weatherSlice.reducer;