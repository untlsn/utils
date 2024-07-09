/**
 * Value or array of this value
 *
 * @example
 * MaybeArray<number> // |> number | number[]
 */
export type MaybeArray<T> = T | T[];
/**
 * Only string keys of object
 *
 * @example
 * type T = { key1: string, key2: number, 5: boolean };
 * KeyOf<T> // |> 'key1' | 'key2'
 */
export type KeyOf<T> = Extract<keyof T, string>;
/**
 * Shallow and Deep path of object
 *
 * @example
 * type T = { flat: number, deep: { value: string }, very: { deep: { value: boolean } } };
 * Path<T> // |> 'flat' | 'deep' | 'deep.value' | 'very' | 'very.deep' | 'very.deep.value'
 *
 */
export type Path<T> = T extends (infer R)[]
	? `${Path<R>}`
	: T extends object
		? { [K in KeyOf<T>]: `${K}` | `${K}.${Path<T[K]>}` }[KeyOf<T>]
		: never;
/**
 * Value of path to object
 *
 * @example
 * type T = { flat: number, deep: { value: string }, very: { deep: { value: boolean } } };
 * PathValue<T, 'flat'> // |> number
 * PathValue<T, 'deep.value'> // |> string
 * PathValue<T, 'very.deep'> // |> { value: boolean }
 */
export type PathValue<TObject, TPath extends string> = TPath extends keyof NonNullable<TObject>
	? NonNullable<TObject>[TPath]
	: TPath extends `${infer K}.${infer TRest}`
		? K extends keyof TObject
			? PathValue<TObject[K], TRest>
			: never
		: never;

// Function that return value T
export type Accessor<T> = () => T;
// Function that return value T or value T itself
export type MaybeAccessor<T> = T | Accessor<T>;
