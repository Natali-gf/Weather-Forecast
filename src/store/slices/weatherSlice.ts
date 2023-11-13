import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';
import { apiKey } from '../../api/apiKey';
import { StatusCode } from '../../enum/status';
import { ICurrentForecast, IMultidayForecast } from '../../interfaces/weather';

type InitialState = {
	weatherMultiday: IMultidayForecast | null,
	weatherCurrent: ICurrentForecast | null,
};

const initialState: InitialState = {
	weatherMultiday: null,
	weatherCurrent: null,
};

export const fetchWeather = createAsyncThunk(
	'weather/fetchWeather',
	async function(_, {rejectWithValue}) {
		try {
			const responseWeatherCurrent = await api.get(`/data/2.5/weather?lat=51.51&lon=-0.09&appid=${apiKey}&units=metric&lang=ua`);
			const response = await api.get(`/data/2.5/forecast??lat=51.51&lon=-0.09&appid=${apiKey}&units=metric&lang=en`);

			if(response.status < StatusCode.Successful
				|| response.status >= StatusCode.Redirection) {
				throw new Error('Error! Try later.');
			}


				return {
					// characters: response.data.data.characters.results,
					// count: response.data.data.characters.info.count,
				};

		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
		setCurrentCharacterId: (state, action) => {
			// state.currentCharacterId = action.payload;
		},
		clearCurrentCharacterData: (state) => {
			// state.currentCharacterData = null;
		},
    },
	extraReducers: {
		[fetchWeather.pending.type]: (state) => {
			// state.status = Status.Loading;
			// state.error = null;
		},
		[fetchWeather.fulfilled.type]: (state, action) => {
			// state.status = Status.Resolved;
			// state.characters = action.payload.characters;
			// state.characterCount = action.payload.count;
		},
		[fetchWeather.rejected.type]: (state, action) => {
			// state.status = Status.Rejected;
			// state.error = action.payload.message;
		},

	},
});

export const {
	setCurrentCharacterId,
	clearCurrentCharacterData,
} = weatherSlice.actions;

export default weatherSlice.reducer;