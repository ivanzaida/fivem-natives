/**
 * DATAFILE:DATAARRAY_GET_FLOAT
 *
 * 0xCEBBA737179CE3D0

 * 
 * ------------------------------------------------------------------
 * @param {string[]} arr
 * @param {number} index
 * @returns {number}  
 */
export function dataarrayGetFloat(arr: string[], index: number): number {
	const dataarrayGetFloat_result = Citizen.invokeNative<number>('0xCEBBA737179CE3D0', arr, index);
	return dataarrayGetFloat_result;
}