/**
 * DATAFILE:DATAARRAY_ADD_FLOAT
 *
 * 0x0F24467993708BCC

 * 
 * ------------------------------------------------------------------
 * @param {string[]} arr
 * @param {number} value
 */
export function dataarrayAddFloat(arr: string[], value: number): void {
	const dataarrayAddFloat_result = Citizen.invokeNative<void>('0x0F24467993708BCC', arr, value);
	return dataarrayAddFloat_result;
}