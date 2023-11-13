export function debounce(func: Function, delay: number) {
	let timerId: NodeJS.Timeout;
	return function (...args: any[]) {
		if (timerId) {
			clearTimeout(timerId);
		}
		timerId = setTimeout(() => {
			func(...args);
		}, delay);
	};
};