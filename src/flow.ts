import { Accessor, MaybeAccessor } from './types.ts';

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

/**
 * If value is function then it will run it and return response, otherwise it returns value
 * @param value - value or function that return this value
 *
 * @example
 * const obj = {};
 * const getter = () => obj;
 *
 * access(obj) == obj // |> true
 * access(getter) == obj // |> true
 *
 */
export function access<T>(value: MaybeAccessor<T>): T {
	if (typeof value == 'function') return (value as Accessor<T>)();
	return value;
}

/**
 * Check if object is actually an object and if key one of it keys
 * @param object - maybe object that we check and cast type
 * @param key - key that maybe included in object
 *
 * @example
 * const object: unknown = { field: '' };
 * const notObject: unknown = undefined;
 *
 * if (checkIfObjectInclude(object, 'field')) {
 *   // This will run and typescript will know that object includes field
 * } else {
 *   // This will never run
 * }
 *
 * if (checkIfObjectInclude(notObject, 'field')) {
 *   // This will never run
 * } else {
 *   // This will run and typescript will warn you that notObject is still unknown
 * }
 */
export function checkIfObjectInclude<T extends string>(object: unknown, key: T): object is Record<T, unknown> {
	return !!object && typeof object == 'object' && key in object;
}
