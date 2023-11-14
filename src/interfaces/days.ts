import { Month } from '../types/month';
import {WeekDay, WeekDayAbbr} from '../types/weekDays';

export interface IWeekDays {
	[key: number]: {
		name: WeekDay;
		abbr: WeekDayAbbr;
	};
}

export interface IMonth {
	[key: number]: {
		name: Month;
	};
}