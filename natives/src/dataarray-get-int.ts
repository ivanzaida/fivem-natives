/**
 * DATAFILE:DATAARRAY_GET_INT
 *
 * 0xB64F599E8DBD9678

 * 
 * ------------------------------------------------------------------
 * @param {string[]} arr
 * @param {number} index
 * @returns {number}  
 */
export function dataarrayGetInt(arr: string[], index: number): number {
	const dataarrayGetInt_result = Citizen.invokeNative<number>('0xB64F599E8DBD9678', arr, index);
	return dataarrayGetInt_result;
}