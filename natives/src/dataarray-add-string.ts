/**
 * DATAFILE:DATAARRAY_ADD_STRING
 *
 * 0xABC288F63B017656

 * 
 * ------------------------------------------------------------------
 * @param {string[]} arr
 * @param {string} value
 */
export function dataarrayAddString(arr: string[], value: string): void {
	const dataarrayAddString_result = Citizen.invokeNative<void>('0xABC288F63B017656', arr, value);
	return dataarrayAddString_result;
}