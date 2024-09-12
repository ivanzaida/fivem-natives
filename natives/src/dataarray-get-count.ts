/**
 * DATAFILE:DATAARRAY_GET_COUNT
 *
 * 0x2A32420E04AE5787

 * 
 * ------------------------------------------------------------------
 * @param {string[]} arr
 * @returns {number}  
 */
export function dataarrayGetCount(arr: string[]): number {
	const dataarrayGetCount_result = Citizen.invokeNative<number>('0x2A32420E04AE5787', arr);
	return dataarrayGetCount_result;
}