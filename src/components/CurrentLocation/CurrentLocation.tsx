import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import { useAppDispatch } from '../../store/hooks';
import { fetchLocationByGeo, setErrorText } from '../../store/slices/locationSlice';
import { getGeoPosition } from '../../helpers/getGeoPosition';
import { ICoords } from '../../interfaces/coords';

type Props = {
	className?: string,
}

function CurrentLocation({className}: Props): JSX.Element {
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
			className={cn(s.buttonGeo, className)}
			onClick={(): void => setFindGeo(true)}>
			Current location
		</button>
	)
}

export default CurrentLocation;