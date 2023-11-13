import { Units } from "../enum/units";

export interface IBaseRequestWeatherParams {
	lat: number,
	lon: number,
	appid: string,
}

export interface IExtentedRequestParams extends IBaseRequestWeatherParams {
	cnt: number,
	units: Units,
	lang: string,
}

export interface IRequestLocationParams {
	q: string,
	appid: string,
	limit?: number,
}
