import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { fetchCurrentWeather } from '../../store/slices/weatherSlice';
import { weatherIcons } from '../../data/weatherIcons';
import { getTime } from '../../helpers/getDateTime';
import Card from '../ui/Card/Card';

type Props = {
	className?: string,
}

function CurrentWeather({className, ...props}: Props): JSX.Element {
	const dispatch = useAppDispatch();
	const { currentCity } = useAppSelector((state: RootState) => state.location);
	const { weatherCurrent } = useAppSelector((state: RootState) => state.weather);

	React.useEffect((): void => {
		if(currentCity) {
			dispatch(fetchCurrentWeather());
		}
	},[currentCity]);

	return (
		<Card
			className={cn(s.weather, className)}>
			<>
				{weatherCurrent !== null &&
					<div className={s.weather}>
						<div className={cn(s.weather__conditions, s.conditions)}>
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
							<div className={s.conditions__sun}>
								<div className={s.conditions__sunrise}>
									<span className={s.conditions__subtitle}>Sunrise:</span>
									<span className={s.conditions__text}>
										{getTime(weatherCurrent.timezone, weatherCurrent.sunrise)}
									</span>
								</div>
								<div className={s.conditions__sunset}>
									<span className={s.conditions__subtitle}>Sunset:</span>
									<span className={s.conditions__text}>
										{getTime(weatherCurrent.timezone, weatherCurrent.sunset)}
									</span>
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
						<div className={cn(s.weather__conditions, s.conditions)}>
							<div className={s.conditions__wind}>
								<span className={s.conditions__subtitle}>
									{Math.round(weatherCurrent.windSpeed)} m/s
								</span>
								<span className={s.conditions__text}>Wind speed</span>
								<span className={s.conditions__subtitle}>
									{Math.round(weatherCurrent.windGust)} m/s
								</span>
								<span className={s.conditions__text}>Wind gust</span>
								<div className={s.conditions__windDirection}
									style={{rotate: `${Math.round(weatherCurrent.windDirection)}deg`}}>
								</div>
								<span className={s.conditions__text}>Wind direction</span>
							</div>
							<div className={s.conditions__pressure}>
								<span className={s.conditions__subtitle}>
								{weatherCurrent.pressure}hPa
								</span>
								<span className={s.conditions__text}>Pressure</span>
							</div>
							<div className={s.conditions__humiditi}>
								<span className={s.conditions__subtitle}>
								{weatherCurrent.humidity}%
								</span>
								<span className={s.conditions__text}>Humidity</span>
							</div>
						</div>
					</div>
				}
			</>
		</Card>
	)
}

export default CurrentWeather;