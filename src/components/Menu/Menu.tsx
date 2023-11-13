import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import Search from '../Search/Search';
import { RootState } from '../../store/store';
import { useAppSelector } from '../../store/hooks';

type Props = {
	openedMenu: boolean;
	setOpenedMenu: React.Dispatch<React.SetStateAction<boolean>>;
	className?: string;
};

function Menu({openedMenu, setOpenedMenu, ...props}: Props): JSX.Element {
	const { currentCity } = useAppSelector((state: RootState) => state.location);
	const [editMenu, setEditMenu] = React.useState<boolean>(false);

	function handleClick() {
		setEditMenu(!editMenu)
	}

	return (
		<div className={cn(s.menu, props.className)} onClick={handleClick}>
			<div className={s.menu__container}>
				<div className={s.menu__header}>
					<button
						className={s.menu__burger}
						onClick={(): void => setOpenedMenu(!openedMenu)}></button>
					<div>
						<input
							className={s.menu__switch}
							type={'checkbox'}
							id={'switchTheme'}
						/>
						<label htmlFor={'switchTheme'} />
					</div>
				</div>
				<button
					className={s.menu__button}
					onClick={(): void => setEditMenu(!editMenu)}>
					Manage locations
				</button>
				<div className={cn(s.menu__location, s.location)}>
					<div className={s.location__description}>
						<span className={s.location__name}>{currentCity?.name}</span>
						<span className={s.location__country}>
							{currentCity?.state}, {currentCity?.country}
						</span>
					</div>
					<button className={s.location__addButton}
						onClick={() => {}}></button>
				</div>
				{/* <Search /> */}
					{/* //saved locations */}
				{/* <button
					className={s.menu__button}
					onClick={handleClick}>
					Save changes
				</button> */}

			</div>
		</div>
	);
}

export default Menu;
