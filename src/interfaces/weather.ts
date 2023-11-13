import { DayPart } from "../enum/dayPart";
import { IWeatherIcon } from "./weatherIcon";

export interface IMultidayForecast {
	list: IForecastByHours[],
	timestampsCount: number; //A number of timestamps returned in the API response
	timezone: number; //Shift in seconds from UTC
	sunrise: number; //Sunrise time, Unix, UTC
	sunset: number; //Sunset time, Unix, UTC
}

interface IForecastByHours extends IMultidayForecast {
	datatime: number; //Time of data forecasted, unix, UTC
	temperature: number; // Temperature.
	feelsLike: number; //Temperature.
	minTemperature: number; //Minimum temperature at the moment.
	maxTemperature: number; //Maximum temperature at the moment.
	pressure: number; //Atmospheric pressure by default, hPa
	humidity: number; //Humidity, %
	weatherIcon: IWeatherIcon,
	weatherDescription: string; //Weather condition within the group.
	windSpeed: number; //Wind speed.
	windDirection: number; //Wind direction, degrees (meteorological)
	windGust: number; //Wind gust.
	precipitationProbability: number; //Probability of precipitation.
	dayPart : DayPart.Day | DayPart.Night;
	datatimeTxt: string;
}

export interface ICurrentForecast {
	temperature: number; // Temperature.
	feelsLike: number; //Temperature.
	minTemperature: number; //Minimum temperature at the moment.
	maxTemperature: number; //Maximum temperature at the moment.
	pressure: number; //Atmospheric pressure by default, hPa
	humidity: number; //Humidity, %
	weatherIcon: IWeatherIcon,
	weatherDescription: string; //Weather condition within the group.
	windSpeed: number; //Wind speed.
	windDirection: number; //Wind direction, degrees (meteorological)
	windGust: number; //Wind gust.
	visibility: number; //Visibility, meter.
	clouds:  number; //Cloudiness, %
	coord: {
		lon: number; //Longitude of the location
		lat: number; //Latitude of the location
	};
	datatime: number; //Time of data calculation, unix, UTC
	sunrise: number; //Sunrise time, unix, UTC
	sunset: number; //Sunset time, unix, UTC
	timezone: number; //Shift in seconds from UTC
}