import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import {RootState} from '../../store/store';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import { addFavoriteCity, removeFavoriteCity, setCurrentCity } from '../../store/slices/locationSlice';
import { ILocation } from '../../interfaces/location';
import { ReactComponent as Trash } from '../../assets/icons/trash.svg';

type Props = {
	openedMenu: boolean;
	setOpenedMenu: React.Dispatch<React.SetStateAction<boolean>>;
	// setTheme: React.Dispatch<React.SetStateAction<string>>;
};

function Menu({openedMenu, setOpenedMenu}: Props): JSX.Element {
	const dispatch = useAppDispatch();
	const { currentCity, favoriteCities } = useAppSelector((state: RootState) => state.location);
	const [ editMenu, setEditMenu ] = React.useState<boolean>(false);

	React.useEffect(() => {
		if(favoriteCities.length === 0 && localStorage.favoriteCities) {
			const storageString: string = localStorage.getItem('favoriteCities') as string;
			dispatch(addFavoriteCity(storageString));
		}
	}, []);

	React.useEffect(() => {
		localStorage.setItem('favoriteCities', JSON.stringify(favoriteCities));
	}, [favoriteCities.length]);

	function chooseCity(city: ILocation) {
		dispatch(setCurrentCity(city));
	}

	return (
		<div className={cn(s.menu, 'menu', 'theme-light')}>
			<div className={s.menu__container}>
				<div className={s.menu__header}>
					<div className={cn(s.menu__switch, s.switch)}>
						<input
							className={s.switch__input}
							type={'checkbox'}
							id={'switchTheme'}
							// onClick={() => setTheme('theme-dark')}
							defaultChecked={true}
						/>
						<label className={s.switch__label} htmlFor={'switchTheme'} />
					</div>
					<button
						className={s.menu__btnClose}
						onClick={(): void => setOpenedMenu(!openedMenu)}></button>
				</div>
				<button
					className={s.menu__button}
					onClick={(): void => setEditMenu(!editMenu)}>
					Manage locations
				</button>
				{currentCity &&
					<div className={cn(s.menu__location, s.location, s.location_notFavorite)}>
						<div className={s.location__description}>
							<span className={s.location__name}>{currentCity?.name}</span>
							<span className={s.location__country}>
								{currentCity?.state} / {currentCity?.country}
							</span>
						</div>
						<button
							className={s.location__addButton}
							onClick={() => dispatch(addFavoriteCity(currentCity))}></button>
					</div>
				}
				{favoriteCities.map((item: ILocation, index: number) => (
					<div className={cn(s.menu__location, s.location)}
						key={index}
						onClick={() => chooseCity(item)}>
						<div className={s.location__description}>
							<span className={s.location__name}>{item.name}</span>
							<span className={s.location__country}>
								{item.state} / {item.country}
							</span>
						</div>
						{editMenu &&
							<button
								className={s.location__remove}
								onClick={() => dispatch(removeFavoriteCity(item))}>
								<Trash className={s.location__remove_icon} />
							</button>
						}
					</div>
				))}
			</div>
		</div>
	);
}

export default Menu;
