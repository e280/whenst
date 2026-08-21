
export function stupidDatetimeFormat(time: number) {
	const date = new Date(time)
	const offset = date.getTime() - date.getTimezoneOffset() * 60_000
	return new Date(offset).toISOString().slice(0, 16)
}

