import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import Search from '../../components/Search/Search';
import Menu from '../../components/Menu/Menu';
import CurrentLocation from '../../components/CurrentLocation/CurrentLocation';

type Props = {
	className?: string;
};

function HomePage({...props}: Props): JSX.Element {
	const [openedMenu, setOpenedMenu] = React.useState<boolean>(false);

	function handleClick() {}

	return (
		<main className={cn(s.content, props.className)}>
			{openedMenu && (
				<div
					className={s.content_hidden}
					onClick={() => setOpenedMenu(false)}
				/>
			)}
			{openedMenu && (
				<Menu setOpenedMenu={setOpenedMenu} openedMenu={openedMenu} />
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

			</div>
		</main>
	);
}

export default HomePage;
