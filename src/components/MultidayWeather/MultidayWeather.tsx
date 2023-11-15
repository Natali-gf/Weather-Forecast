import React from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { fetchMultidayWeather } from '../../store/slices/weatherSlice';
import { weatherIcons } from '../../data/weatherIcons';
import { getDate } from '../../helpers/getDateTime';
import { IForecastByHours } from '../../interfaces/weather';
import { weekDays } from '../../data/datetime';
import Card from '../ui/Card/Card';
import s from './style.module.scss';
import Loader from '../ui/Loader.tsx/Loader';
import { Status } from '../../enum/status';

function MultidayWeather(): JSX.Element {
	const dispatch = useAppDispatch();
	const { currentCity } = useAppSelector((state: RootState) => state.location);
	const { weatherMultiday, status } = useAppSelector((state: RootState) => state.weather);

	React.useEffect((): void => {
		if(currentCity) {
			dispatch(fetchMultidayWeather());
		}
	},[dispatch, currentCity]);

	return (
		<Card className={s.weather}>
			{status === Status.Loading
			? <Loader className={s.loader} />
			: <> {weatherMultiday !== null &&
					<div className={s.weather}>
						<div className={s.weather__title}>5 day weather forecast</div>
						{weatherMultiday.list.map((item:IForecastByHours,
																			 index:number,
																			 array: IForecastByHours[]): JSX.Element => {
							const { weekDay, monthDay, month } = getDate(item.datatimeTxt.slice(0, 10));
							const isNewDay:boolean = index !== 0
								? monthDay !== Number(array[index - 1].datatimeTxt.slice(8, 10))
								: true;
							return (
								<div className={s.weather__item}
										 key={index}>
									{isNewDay &&
										<div className={s.weather__date}>
											{weekDays[weekDay].abbr}, {monthDay}.{month}
										</div>
									}
									<div className={s.weather__info}>
										<div className={s.weather__time}>{item.datatimeTxt.slice(11, 16)}</div>
										<div className={cn(s.weather__description, s.description)}>
											<div className={s.description__img}>
												<img
													src={weatherIcons[item.weatherCode].nightIcon}
													alt={item.weatherDescription} />
											</div>
											<div className={s.description__text}>{item.weatherDescription}</div>
										</div>
										<div className={s.weather__temperature}>
											<span>
												{Math.round(item.maxTemperature)}&#176;{' ... '}
												{Math.round(item.minTemperature)}&#176;
											</span>
											<span>
												Feels like: {Math.round(item.feelsLike)}&#176;
											</span>
										</div>
										<div className={s.weather__wind}>
											<div className={s.weather__windDirection}
												style={{rotate: `${Math.round(item.windDirection)}deg`}}>
											</div>
											<span className={s.weather__text}>
												{Math.round(item.windSpeed)} m/s
											</span>
										</div>
										<div className={s.weather__pressure}>
											<span className={s.weather__subtitle}>
											{item.pressure}hPa
											</span>
										</div>
										<div className={s.weather__humidity}>
											<span className={s.weather__subtitle}>
											{item.humidity}%
											</span>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				}
			</>}
		</Card>
	)
}

export default MultidayWeather;