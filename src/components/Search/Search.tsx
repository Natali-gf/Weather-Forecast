import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import { debounce } from '../../helpers/debounce';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchLocation, setCurrentCity } from '../../store/slices/locationSlice';
import { RootState } from '../../store/store';
import { Status } from '../../enum/status';
import { ILocation } from '../../interfaces/location';

type Props = {
	className?: string,
	placeholder?: string,
}

function Search({className, placeholder, ...props}: Props): JSX.Element {
	const dispatch = useAppDispatch();
	const { status, error, cities } = useAppSelector((state: RootState) => state.location);
	const [ searchValue, setSearchValue ] = React.useState<string>('');

 	//! так и не поняла какой тип возвращает useCallback Promise<"... и тут что?">
	const searchRequest: Function = React.useCallback((value:string): Promise<any> => (
		dispatch(fetchLocation(value))
	),[]);

	//! тут аналогично - <Function>?? или не нужно здесь прописывать типы?
	const debouncedSearch: Function = React.useCallback<Function>(
    debounce(searchRequest, 500),
    [searchRequest]
  );

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { value } = e.currentTarget;

		setSearchValue(value);
		debouncedSearch(value);
	}

	function chooseCity(index: number) {
		dispatch(setCurrentCity(index));
		setSearchValue('');
	}

	return (
		<div
			className={cn(s.search, className)}>
			<div
				className={s.search__field}>
				<input
					className={s.search__input}
					placeholder={'Search by city name'}
					value={searchValue}
					onChange={handleChange}
				/>
			</div>
			{searchValue && status === Status.Loading
				? <div className={cn(s.search__locationList, s.location)}>...</div>
				: cities.length > 0 && status === Status.Resolved && searchValue
				? <ul className={cn(s.search__locationList, s.location)}>
						{cities.map((item: ILocation, index: number): JSX.Element => (
							<li
								className={s.location__item}
								key={index}
								onClick={(): void => chooseCity(index)}>
								<span className={s.location__name}>{item.name}</span>
								<span className={s.location__country}>
									{item.state} / {item.country}
								</span>
							</li>
						))}
					</ul>
				: searchValue
				? <div className={cn(s.search__locationList, s.location)}>City not found</div>
				: null
			}
		</div>
	)
}

export default Search;