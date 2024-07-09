/**
 * Give random natrual number
 * @param max - maximum value that it will return
 *
 * @example
 * randomInt(40) // |> 30
 * randomInt(40) // |> 6
 * randomInt(40) // |> 23
 * randomInt(1) // |> 0
 * randomInt(1) // |> 1
 * randomInt(1) // |> 0
 */
export function randomInt(max: number): number {
	return Math.floor(Math.random() * max);
}
