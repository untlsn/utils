/**
 * Simple promise wrapper over timeout
 *
 * Useful for api throttling for testing
 *
 * @param ms - amount of milliseconds to wait
 *
 * @example
 * async function fetchUser(id: number) {
 * 	// function will wait 1000ms
 * 	await wait(1000);
 * 	return store.users[id];
 * }
 */
export function wait(ms: number): Promise<void> {
	return new Promise((res) => {
		setTimeout(res, ms);
	});
}
