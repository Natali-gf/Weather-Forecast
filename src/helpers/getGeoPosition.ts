import { ICoords } from "../interfaces/coords";

export function getGeoPosition(): Promise<ICoords> {
	return new Promise((resolve: (value: ICoords | PromiseLike<ICoords>) => void,
											reject: (reason: string) => void): void => {

		if (navigator.geolocation) {

			navigator.geolocation.getCurrentPosition((position: GeolocationPosition): void => {
				const { latitude, longitude }: ICoords = position.coords;

				resolve({ latitude, longitude });
			}, (error: GeolocationPositionError): void => {

				if(error.PERMISSION_DENIED){
					reject('To determine your location, enable location data on your device/browser.');
				} else if (error.POSITION_UNAVAILABLE) {
					reject('Your location can\'t be determined');
				}

				reject(error.message)
			});

		} else {
			reject('Your device doesn\'t support geolocation');
		}
	})
}