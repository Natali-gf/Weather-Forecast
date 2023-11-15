import s from './style.module.scss';
import cn from 'classnames';

type Props = {
	className?: string,
}

function Loader({className}: Props): JSX.Element {

	return (
		<div className={cn(s.loader, className)}/>
	)
}

export default Loader;