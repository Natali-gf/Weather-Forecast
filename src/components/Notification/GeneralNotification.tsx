import style from './style.module.scss';
import cn from 'classnames';
import { useAppDispatch } from '../../store/hooks';

type Props = {
	clearError?: Function,
	children?: string,
	className?: string
}

function GeneralNotification({clearError, className, children}: Props): JSX.Element {
	const dispatch = useAppDispatch();
	
	function handleClick(): void {
		if(clearError) {
			dispatch(clearError(null));
		}
	}

	return (
		<div className={cn(style.generalNotification, className)}>
			<div className={style.generalNotification__container}>
				<h4 className={style.generalNotification__title}>Ошибка</h4>
				<p className={style.generalNotification__description}>{children || 'Try later'}</p>
				<button className={style.generalNotification__button}
					onClick={handleClick}>
						OK
				</button>
			</div>
		</div>
	);
}

export default GeneralNotification;