/**
 * DATAFILE:DATAARRAY_GET_BOOL
 *
 * 0x2150C2FC641364CC

 * 
 * ------------------------------------------------------------------
 * @param {string[]} arr
 * @param {number} index
 * @returns {boolean}  
 */
export function dataarrayGetBool(arr: string[], index: number): boolean {
	const dataarrayGetBool_result = Citizen.invokeNative<boolean>('0x2150C2FC641364CC', arr, index);
	return dataarrayGetBool_result;
}