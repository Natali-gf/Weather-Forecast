import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { getDate, getTime } from '../../helpers/getDateTime';
import { weekDays, months } from '../../data/datetime';
import Card from '../ui/Card/Card';
import s from './style.module.scss';
import Loader from '../ui/Loader.tsx/Loader';
import { Status } from '../../enum/status';

function MainCard(): JSX.Element {
	const { currentCity, status } = useAppSelector((state: RootState) => state.location);
	const { weatherCurrent } = useAppSelector((state: RootState) => state.weather);
	const [ time, setTime ] = React.useState<string>('');
	const { weekDay, monthDay, month }= getDate();
	const timeRef: React.MutableRefObject<NodeJS.Timer | undefined> = React.useRef()

	React.useEffect(() => {
		if(weatherCurrent) {

			//? что-то я тут возможно подзапуталась с 'setInterval' и его 'id' и виде 'ref', не могу определиться нужно ли его очищать или нет

			clearInterval(timeRef.current);
			timeRef.current = setInterval(() => {
				setTime(getTime(weatherCurrent.timezone));
			}, 1000);
		}
	}, [time, weatherCurrent, weatherCurrent?.timezone]);

	return (
		<Card className={s.mainCard}>
			<>
				{status === Status.Loading
					?	<Loader className={s.mainCard__loader}/>
					: <>
						<div className={s.mainCard__city}>{currentCity?.name}</div>
						<div className={s.mainCard__time}>{time}</div>
						<div className={s.mainCard__date}>
							{weekDays[weekDay].name}, {monthDay} {months[month].name}
						</div>
					</>
				}
			</>
		</Card>
	)
}

export default MainCard;