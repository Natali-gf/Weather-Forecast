import React from 'react';
import cn from 'classnames';
import Search from '../../components/Search/Search';
import Menu from '../../components/Menu/Menu';
import CurrentLocation from '../../components/CurrentLocation/CurrentLocation';
import MainCard from '../../components/MainCard/MainCard';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import MultidayWeather from '../../components/MultidayWeather/MultidayWeather';
import s from './style.module.scss';

function HomePage(): JSX.Element {
	// const [ theme, setTheme ] = React.useState('theme-light');
	const [openedMenu, setOpenedMenu] = React.useState<boolean>(false);

	return (
		<main className={cn(s.content, 'theme-light')}>
			{openedMenu && (
				<div
					className={s.content_hidden}
					onClick={() => setOpenedMenu(false)}
				/>
			)}
			{openedMenu && (
				<Menu
					setOpenedMenu={setOpenedMenu}
					openedMenu={openedMenu}
					// setTheme={setTheme}
				/>
			)}
			<div className={s.content__container}>
				<div className={s.content__mainTools}>
					<button
						className={s.content__buttonMenu}
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
		</main>
	);
}

export default HomePage;
