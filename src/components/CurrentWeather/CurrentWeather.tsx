import React from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { fetchCurrentWeather } from '../../store/slices/weatherSlice';
import { weatherIcons } from '../../data/weatherIcons';
import { getTime } from '../../helpers/getDateTime';
import Card from '../ui/Card/Card';
import s from './style.module.scss';
import { Status } from '../../enum/status';
import Loader from '../ui/Loader.tsx/Loader';

function CurrentWeather(): JSX.Element {
	const dispatch = useAppDispatch();
	const { currentCity } = useAppSelector((state: RootState) => state.location);
	const { weatherCurrent, status } = useAppSelector((state: RootState) => state.weather);

	React.useEffect((): void => {
		if(currentCity) {
			dispatch(fetchCurrentWeather());
		}
	},[dispatch, currentCity]);

	return (
		<Card>
			<>
				{status === Status.Loading
				? <Loader className={s.loader} />
				:	<> {weatherCurrent &&
					<div className={s.weather}>
						<div className={cn(s.weather__temperature, s.temperature)}>
							<div className={s.temperature__current}>
								{Math.round(weatherCurrent?.temperature)}&#176;
							</div>
							<div className={s.temperature__other}>
								<div className={s.temperature__minmax}>
									max/min: {Math.round(weatherCurrent?.minTemperature)}&#176;
									/ {Math.round(weatherCurrent?.maxTemperature)}&#176;
								</div>
								<div className={s.temperature__feels}>
									Feels like: {Math.round(weatherCurrent.feelsLike)}&#176;
								</div>
							</div>
						</div>
						<div className={cn(s.weather__sun, s.sun)}>
							<div className={s.sun__sunrise}>
								<div className={s.sun__subtitle}>Sunrise</div>
								<div className={s.sun__text}>
									{getTime(weatherCurrent.timezone, weatherCurrent.sunrise)}
								</div>
							</div>
							<div className={s.sun__sunset}>
								<div className={s.sun__subtitle}>Sunset</div>
								<div className={s.sun__text}>
									{getTime(weatherCurrent.timezone, weatherCurrent.sunset)}
								</div>
							</div>
						</div>
						<div className={cn(s.weather__description, s.description)}>
							<div className={s.description__img}>
								<img
									src={weatherIcons[weatherCurrent.weatherCode].nightIcon}
									alt={weatherCurrent.weatherDescription} />
							</div>
							<div>{weatherCurrent.weatherDescription}</div>
						</div>
						<div className={s.weather__wind}>
							<span className={s.weather__subtitle}>
								{Math.round(weatherCurrent.windSpeed)} m/s
							</span>
							<span className={s.weather__text}>Wind speed</span>
							<span className={s.weather__subtitle}>
								{Math.round(weatherCurrent.windGust)} m/s
							</span>
							<span className={s.weather__text}>Wind gust</span>
							<div className={s.weather__windDirection}
								style={{rotate: `${Math.round(weatherCurrent.windDirection)}deg`}}>
							</div>
							<span className={s.weather__text}>Wind direction</span>
						</div>
						<div className={s.weather__pressure}>
							<span className={s.weather__subtitle}>
							{weatherCurrent.pressure}hPa
							</span>
							<span className={s.weather__text}>Pressure</span>
						</div>
						<div className={s.weather__humidity}>
							<span className={s.weather__subtitle}>
							{weatherCurrent.humidity}%
							</span>
							<span className={s.weather__text}>Humidity</span>
						</div>
					</div>}
				</>}
			</>
		</Card>
	)
}

export default CurrentWeather;