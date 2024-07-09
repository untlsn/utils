import { MaybeArray } from './types.ts';


/**
 * Filter all falsy values from array
 *
 * @param values - array that can contain falsy values
 * @example
 * const arr: boolean[] = [];
 * filterFalsy(arr); // |> true[]
 * @example
 * const arr: (string | undefined)[] = [];
 * filterFalsy(arr); // |> string[]
 * @example
 * const arr: null[] = [];
 * filterFalsy(arr); // |> never[]
 * @example
 * const arr: (undefined | false | null | 0 | '')[] = [];
 * filterFalsy(arr); // |> never[]
 */
export default function filterFalsy<T>(values: T[]): Exclude<T, undefined | false | null | 0 | ''>[] {
	return values.filter(Boolean) as any[];
}

/**
 * Wrap non-array in tuple and just return arrays
 *
 * Useful for apis where you allow user to pass single value of array of it
 * @param value - maybe array of value
 *
 * @example
 * asArray(1) // |> [1]
 * asArray([1]) // |> [1]
 * asArray([1, 2, 3]) // |> [1, 2, 3]
 */
export function asArray<T>(value: T): T extends any[] ? T : [T];
export function asArray<T>(value: MaybeArray<T>): T[] {
	return Array.isArray(value) ? value : [value];
}

/**
 * Give random value from array
 * @param arr
 *
 * @example
 * const arr = [1, 2, 3, 4, 5];
 *
 * getRandomValueFromArray(arr) // |> 3
 * getRandomValueFromArray(arr) // |> 2
 * getRandomValueFromArray(arr) // |> 3
 * getRandomValueFromArray(arr) // |> 4
 */
export function getRandomValueFromArray<T>(arr: T[]): T {
	const index = Math.floor(Math.random() * arr.length);
	return arr[index];
}
