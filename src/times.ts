/**
 * Create an array sequence of given length
 *
 * @param length - length of created array
 *
 * @example
 * const arr = times(10);
 *
 * console.log(arr) // >> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
export function times(length: number): number[] {
	return [...Array(length)].map((_v, i) => i);
}

/**
 * Create an array mapped sequence of given length.
 * Work like **times(length).map(cb)**
 *
 * It's more memory efficient than **times(length).map(cb)**, because it doesn't create 2 arrays at ones
 * @param length - length of created array
 * @param cb - function over which every id of function will be mapped
 *
 * @example
 * const arr = times(10, (i) => i + 1);
 *
 * console.log(arr) // >> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */
export function timesMap<T>(length: number, cb: (i: number) => T): T[] {
	return [...Array(length)].map((_v, i) => cb(i));
}
