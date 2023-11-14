import {IMonth, IWeekDays} from '../interfaces/days';

export const weekDays: IWeekDays = {
	0: { name: 'Sunday', abbr: 'Sun' },
	1: { name: 'Monday', abbr: 'Mon' },
	2: { name: 'Tuesday', abbr: 'Tue' },
	3: { name: 'Wednesday', abbr: 'Wed' },
	4: { name: 'Thursday',	abbr: 'Thu'	},
	5: { name: 'Friday', abbr: 'Fri' },
	6: { name: 'Saturday',	abbr: 'Sat'	},
};

export const months: IMonth = {
	0: { name: 'January' },
	1: { name: 'February' },
	2: { name: 'March' },
	3: { name: 'April' },
	4: { name: 'May' },
	5: { name: 'June' },
	6: { name: 'July' },
	7: { name: 'August' },
	8: { name: 'September' },
	9: { name: 'October' },
	10: { name: 'November' },
	11: { name: 'December' },
};
