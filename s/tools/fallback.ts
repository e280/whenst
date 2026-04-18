
export function fallback<Ret, Mitigation>(
		fn: () => Ret,
		mitigate: (error: any) => Mitigation,
	) {

	try { return fn() }
	catch (error) { return mitigate(error) }
}

