/**
 * DATAFILE:DATAARRAY_GET_STRING
 *
 * 0x446BB52C35DB68A0

 * 
 * ------------------------------------------------------------------
 * @param {string[]} arr
 * @param {number} index
 * @returns {string}  
 */
export function dataarrayGetString(arr: string[], index: number): string {
	const dataarrayGetString_result = Citizen.invokeNative<string>('0x446BB52C35DB68A0', arr, index);
	return dataarrayGetString_result;
}