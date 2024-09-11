/**
 * DATAFILE:DATAARRAY_ADD_BOOL
 *
 * 0xDE4827405E9BE9A9

 * 
 * ------------------------------------------------------------------
 * @param {string[]} arr
 * @param {boolean} value
 */
export function dataarrayAddBool(arr: string[], value: boolean): void {
	const dataarrayAddBool_result = Citizen.invokeNative<void>('0xDE4827405E9BE9A9', arr, value);
	return dataarrayAddBool_result;
}