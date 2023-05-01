export function formatAsCurrency(num: number | undefined, currency = 'USD') {
	if (!num) return 'N/A';
	return num.toLocaleString('en', { style: 'currency', currency });
}

export function formatAsDate(date: string | undefined) {
	if (!date) return 'N/A';
	const [year, month, day] = date.split('-').map(Number);
	const dateObj = new Date(year, month - 1, day);
	return dateObj.toLocaleDateString('en', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

export function formatAsDuration(minutes: number | undefined) {
	if (!minutes) return 'N/A';
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;
	return `${hours}h ${remainingMinutes}m`;
}
