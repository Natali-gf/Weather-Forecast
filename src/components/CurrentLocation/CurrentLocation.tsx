import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { fetchLocationByGeo, setErrorText } from '../../store/slices/locationSlice';
import { getGeoPosition } from '../../helpers/getGeoPosition';
import { ICoords } from '../../interfaces/coords';
import s from './style.module.scss';

function CurrentLocation(): JSX.Element {
	const dispatch = useAppDispatch();
	const [ findGeo, setFindGeo ] = React.useState<boolean>(true);

	React.useEffect((): void => {
		if(findGeo === true) {
			getGeoPosition().then((result: ICoords | string): void => {
				if(typeof result === 'string') {
					dispatch(setErrorText(result));
				} else {
					dispatch(fetchLocationByGeo(result));
				}
			});

			setFindGeo(false);
		}
	},[findGeo]);

	return (
		<button
			className={s.buttonGeo}
			onClick={(): void => setFindGeo(true)}>
			Current location
		</button>
	)
}

export default CurrentLocation;