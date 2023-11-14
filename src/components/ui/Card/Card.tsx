import s from './style.module.scss';
import cn from 'classnames';

type Props = {
	children: JSX.Element,
	className?: string,
}

function Card({children, className}: Props): JSX.Element {

	return (
		<div
			className={cn(s.card, className)}>
			{children}
		</div>
	)
}

export default Card;