import React from 'react';
import cn from 'classnames';
import Search from '../../components/Search/Search';
import Menu from '../../components/Menu/Menu';
import CurrentLocation from '../../components/CurrentLocation/CurrentLocation';
import MainCard from '../../components/MainCard/MainCard';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import MultidayWeather from '../../components/MultidayWeather/MultidayWeather';
import s from './style.module.scss';
import GeneralNotification from '../../components/Notification/GeneralNotification';
import {useAppSelector} from '../../store/hooks';
import {RootState} from '../../store/store';
import {clearErrorText} from '../../store/slices/locationSlice';
import {clearError} from '../../store/slices/weatherSlice';

function HomePage(): JSX.Element {
	const [openedMenu, setOpenedMenu] = React.useState<boolean>(false);
	const [errorNotification, showErrorNotification] = React.useState<boolean>(false);
	const errorLocation = useAppSelector((state: RootState) => state.location.error);
	const errorWeather = useAppSelector((state: RootState) => state.weather.error);

	React.useEffect(() => {
		if (errorLocation || errorWeather) {
			showErrorNotification(true);
		} else {
			showErrorNotification(false);
		}
	}, [errorLocation, errorWeather]);

	return (
		<main className={cn(s.content)}>
			{openedMenu && (
				<div className={s.content_hidden} onClick={() => setOpenedMenu(false)} />
			)}
			{openedMenu && <Menu setOpenedMenu={setOpenedMenu} openedMenu={openedMenu} />}
			<div className={s.content__container}>
				<div className={s.content__mainTools}>
						<button
							className={cn(s.content__buttonMenu, {
								[s.content__buttonMenu_hidden]: openedMenu,
							})}
							onClick={() => setOpenedMenu(!openedMenu)}
						/>
					<Search />
					<CurrentLocation />
				</div>
				<div className={s.content__main}>
					<MainCard />
					<CurrentWeather />
				</div>
				<MultidayWeather />
			</div>
			{errorNotification && (
				<GeneralNotification
					{...(errorLocation
						? {children: errorLocation, clearError: clearErrorText}
						: errorWeather
						? {children: errorWeather, clearError: clearError}
						: {})}
				/>
			)}
		</main>
	);
}

export default HomePage;
