import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import { debounce } from '../../helpers/debounce';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clearCities, fetchLocation, fetchLocationByGeo, setCurrentCity, setErrorText } from '../../store/slices/locationSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { Status } from '../../enum/status';
import { ILocation } from '../../interfaces/location';
import { getGeoPosition } from '../../helpers/getGeoPosition';
import { ICoords } from '../../interfaces/coords';

type Props = {
	className?: string,
	placeholder?: string,
}

function CurrentLocation({className, placeholder, ...props}: Props): JSX.Element {
	const dispatch = useAppDispatch();
	const { status, error, cities } = useAppSelector((state: RootState) => state.location);
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