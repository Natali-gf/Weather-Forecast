export function getTime(timezone: number, timestamp?: number) {
	const timenow = timestamp ? timestamp * 1000 : Date.now();
	const datetime = new Date(timenow + (timezone * 1000))
	const hours = datetime.getUTCHours();
	const minutes = datetime.getUTCMinutes();

	return (hours > 9 ? hours : '0' + hours) + ':' + (minutes > 9 ? minutes : '0' + minutes);
}

export function getDate() {
	const datetime = new Date();
	const weekDay = datetime.getDay();
	const monthDay = datetime.getDate();
	const month = datetime.getMonth();

	return { weekDay, monthDay, month };
}