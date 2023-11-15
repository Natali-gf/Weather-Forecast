import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';
import { apiKey } from '../../api/apiKey';
import { IResponseWithLocationData,
				IResponseLocationData } from '../../interfaces/apiResponses';
import { Status, StatusCode } from '../../enum/status';
import { ILocation } from '../../interfaces/location';
import { StatusRequest } from '../../types/statusRequest';
import { firstArrayItem } from '../../data/constants';
import { ICoords } from '../../interfaces/coords';

type InitialState = {
	status: StatusRequest,
	error: string | null,
	cities: ILocation[],
	favoriteCities: ILocation[],
	currentCity: ILocation | null,
};

const initialState: InitialState = {
	status: Status.Loading,
	error: null,
	cities: [],
	favoriteCities: [],
	currentCity: null //? что лучше писать в initialState - 'null' или {} ?
};

export const fetchLocation = createAsyncThunk(
	'location/fetchLocation',
	async function(value: string, {rejectWithValue}): Promise<ILocation[] | unknown> {
		try {
			if(value === '') return [];

			const response: IResponseWithLocationData = await api.get(`/geo/1.0/direct?q=${value}&limit=5&appid=${apiKey}`);

			if(response.status < StatusCode.Successful
				|| response.status >= StatusCode.Redirection) {
				throw new Error('Error! Try later.');
			}

			const locations: ILocation[] = response.data.map(
				(item: IResponseLocationData) => (
					{
						name: item.name,
						latitude: item.lat,
						longitude: item.lon,
						country: item.country,
						state: item.state
					}
				)
			);

			return locations;
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const fetchLocationByGeo = createAsyncThunk(
	'location/fetchLocationByGeo',
	async function(coords: ICoords, {rejectWithValue}): Promise<ILocation[] | unknown> {
		try {
			const response: IResponseWithLocationData = await api.get(`/geo/1.0/reverse?lat=${coords.latitude}&lon=${coords.longitude}&limit=5&appid=${apiKey}`);

			if(response.status < StatusCode.Successful
				|| response.status >= StatusCode.Redirection) {
				throw new Error('Error! Try later.');
			}

			return {
				name: response.data[firstArrayItem].name,
				latitude: response.data[firstArrayItem].lat,
				longitude: response.data[firstArrayItem].lon,
				country: response.data[firstArrayItem].country,
				state: response.data[firstArrayItem].state
			};
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {
		clearCities: (state: InitialState) => {
			state.cities = [];
		},
		setCurrentCity: (state: InitialState, action: PayloadAction<ILocation>) => {
			state.currentCity = action.payload;
		},
		setErrorText: (state: InitialState, action: PayloadAction<string | null>) => {
			state.error = action.payload;
		},
		clearErrorText: (state: InitialState) => {
			state.error = null;
		},
		addFavoriteCity: (state: InitialState,
											action: PayloadAction<ILocation | string>) => {
			if(typeof action.payload === 'string') {
				const favoriteCities:ILocation[] = JSON.parse(action.payload);
				state.favoriteCities = favoriteCities;
			} else {
				state.favoriteCities.push(action.payload);
			}
		},
		removeFavoriteCity: (state: InitialState,
												 action: PayloadAction<ILocation>) => {
			state.favoriteCities = state.favoriteCities.filter(item => {
				if(action.payload.latitude === item.latitude &&
				action.payload.longitude === item.longitude) return;
				else return true;
			});
		},
	},
	extraReducers: {
		[fetchLocation.pending.type]: (state: InitialState) => {
			state.status = Status.Loading;
			state.error = null;
		},
		[fetchLocation.fulfilled.type]: (state: InitialState,
																		 action: PayloadAction<ILocation[]>) => {
			state.status = Status.Resolved;
			state.cities = action.payload;
		},
		[fetchLocation.rejected.type]: (state: InitialState,
																		action: PayloadAction<Error>) => {
			state.status = Status.Rejected;
			state.error = action.payload.message;
		},

		[fetchLocationByGeo.pending.type]: (state: InitialState) => {
			state.status = Status.Loading;
			state.error = null;
		},
		[fetchLocationByGeo.fulfilled.type]: (state: InitialState,
																		 			action: PayloadAction<ILocation>) => {
			state.status = Status.Resolved;
			state.currentCity = action.payload;
		},
		[fetchLocationByGeo.rejected.type]: (state: InitialState,
																				 action: PayloadAction<Error>) => {
			state.status = Status.Rejected;
			state.error = action.payload.message;
		},
	},
});

export const {
	clearCities,
	setCurrentCity,
	setErrorText,
	clearErrorText,
	addFavoriteCity,
	removeFavoriteCity,
} = locationSlice.actions;

export default locationSlice.reducer;