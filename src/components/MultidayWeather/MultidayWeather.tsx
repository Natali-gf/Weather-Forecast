import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { fetchCurrentWeather, fetchMultidayWeather } from '../../store/slices/weatherSlice';
import { weatherIcons } from '../../data/weatherIcons';
import { getTime } from '../../helpers/getDateTime';
import Card from '../ui/Card/Card';

type Props = {
	className?: string,
}

function MultidayWeather({className, ...props}: Props): JSX.Element {
	const dispatch = useAppDispatch();
	const { currentCity } = useAppSelector((state: RootState) => state.location);
	const { weatherMultiday } = useAppSelector((state: RootState) => state.weather);

	React.useEffect((): void => {
		if(currentCity) {
			dispatch(fetchMultidayWeather());
		}
	},[currentCity]);

	return (
		<Card
			className={cn(s.weather, className)}>
			<>
				{weatherMultiday !== null &&
					<div className={s.weather}>


					</div>
				}

			</>
		</Card>
	)
}

export default MultidayWeather;