/**
 * DATAFILE:DATAARRAY_ADD_INT
 *
 * 0x4BEA39F9F6950599

 * 
 * ------------------------------------------------------------------
 * @param {string[]} arr
 * @param {number} value
 */
export function dataarrayAddInt(arr: string[], value: number): void {
	const dataarrayAddInt_result = Citizen.invokeNative<void>('0x4BEA39F9F6950599', arr, value);
	return dataarrayAddInt_result;
}