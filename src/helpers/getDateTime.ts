export function getTime(timezone: number, timestamp?: number): string {
	const timenow: number = timestamp ? timestamp * 1000 : Date.now();
	const datetime: Date = new Date(timenow + (timezone * 1000))
	const hours: number = datetime.getUTCHours();
	const minutes: number = datetime.getUTCMinutes();

	return (hours > 9 ? hours : '0' + hours) + ':' + (minutes > 9 ? minutes : '0' + minutes);
}

export function getDate(date?: string) {
	const datetime: Date = date ? new Date(date) : new Date();
	const weekDay: number = datetime.getDay();
	const monthDay: number = datetime.getDate();
	const month: number = datetime.getMonth();

	return { weekDay, monthDay, month };
}
