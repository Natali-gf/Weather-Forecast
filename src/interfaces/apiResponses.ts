export interface IResponseWeatherMultiday {
	cod: string; //Internal parameter
	message: number | string; //Internal parameter
	cnt: number; //A number of timestamps returned in the API response
	list: Array<IResponseWeatherByHours>;
	city: {
		id: number; // City ID
		name: string; //City name
		coord: {
			lon: number; //Longitude of the location
			lat: number; //Latitude of the location
		};
		country: string; //Country code (GB, JP etc.).
		population: number; //City population
		timezone: number; //Shift in seconds from UTC
		sunrise: number; //Sunrise time, Unix, UTC
		sunset: number; //Sunset time, Unix, UTC
	};
}

export interface IResponseWeatherByHours {
	dt: number; //Time of data forecasted, unix, UTC
	main: IResponseWeatherMain;
	weather: IResponseWeather[];
	clouds: {
		all: number; //Cloudiness, %
	};
	wind: IResponseWind;
	visibility: number; //Average visibility, metres. The maximum value of the visibility is 10km
	pop: number; //Probability of precipitation. The values of the parameter vary between 0 and 1, where 0 is equal to 0%, 1 is equal to 100%
	rain: {
		'3h': number; //(where available) Rain volume for the last 3 hours, mm. Please note that only mm as units of measurement are available for this parameter
	};
	snow: {
		'3h': number; //(where available)Snow volume for the last 3 hours, mm. Please note that only mm as units of measurement are available for this parameter
	};
	sys: {
		pod: string; //Part of the day (n - night, d - day)
	};
	dt_txt: string;
}
export interface IResponseWeatherMain {
	temp: number; // Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
	feels_like: number; //Temperature. This temperature parameter accounts for the human perception of weather.
	temp_min: number; //Minimum temperature at the moment of calculation. This is minimal forecasted temperature (within large megalopolises and urban areas), use this parameter optionally.
	temp_max: number; //Maximum temperature at the moment of calculation. This is maximal forecasted temperature (within large megalopolises and urban areas), use this parameter optionally.
	pressure: number; //Atmospheric pressure on the sea level, hPa
	humidity: number; //Humidity, %
	sea_level: number; //Atmospheric pressure on the sea level, hPa
	grnd_level: number; //Atmospheric pressure on the ground level, hPa
}

export interface IResponseWeather {
	id: number; //Weather condition id
	main: string; //Group of weather parameters (Rain, Snow, Clouds etc.)
	description: string; //Weather condition within the group.
	icon: string; //Weather icon id
}

export interface IResponseCoord {
	lon: number; //Longitude of the location
	lat: number; //Latitude of the location
}

export interface IResponseWind {
	speed: number; //Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
	deg: number; //Wind direction, degrees (meteorological)
	gust: number; //Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
}

export interface IResponseWeatherCurrent {
	coord: IResponseCoord;
	weather: IResponseWeather[];
	main: IResponseWeatherMain;
	wind: IResponseWind;
	dt: number; //Time of data calculation, unix, UTC
	base: string; //Internal parameter
	visibility: number; //Visibility, meter. The maximum value of the visibility is 10 km
	rain: {
		'1h': number; //(where available) Rain volume for the last 1 hour, mm.
		'3h': number; //(where available) Rain volume for the last 3 hours, mm.
	};
	snow: {
		'1h': number; //(where available) Snow volume for the last 1 hour, mm.
		'3h': number; //(where available)Snow volume for the last 3 hours, mm.
	};
	clouds: {
		all: number; //Cloudiness, %
	};
	sys: {
		type: number; // Internal parameter
		id: number; //Internal parameter
		message: string; // Internal parameter
		country: string; //Country code (GB, JP etc.)
		sunrise: number; //Sunrise time, unix, UTC
		sunset: number; //Sunset time, unix, UTC
	};
	timezone: number; //Shift in seconds from UTC
	id: number; // City ID
	name: string; //City name
	cod: number; //Internal parameter
}

export interface IResponseWithWeatherData extends Response {
	data: IResponseWeatherMultiday
}

export interface IResponseWithWeatherCurrentData extends Response {
	data: IResponseWeatherCurrent
}

export interface IResponseLocationData extends Response {
	name: string,
	local_names: { [key: string]: string },
	lat: number,
	lon: number,
	country: string,
	state: string
}

export interface IResponseWithLocationData extends Response {
	data: Array<IResponseLocationData>
}
