import {DayPart} from '../enum/dayPart';

export interface IMultidayForecast {
	list: IForecastByHours[];
	timezone: number;
}

export interface IForecastByHours extends IForecast {
	precipitationProbability: number;
	dayPart: string;
	datatimeTxt: string;
	visibility: number;
	clouds: number;
}

export interface ICurrentForecast extends IForecast {
	visibility: number;
	clouds: number;
	sunrise: number;
	sunset: number;
	timezone: number;
}

export interface IForecast {
	temperature: number;
	feelsLike: number;
	minTemperature: number;
	maxTemperature: number;
	pressure: number;
	humidity: number;
	weatherCode: number;
	weatherDescription: string;
	windSpeed: number;
	windDirection: number;
	windGust: number;
	datatime: number;
}
