/**
 * DATAFILE:DATAARRAY_GET_DICT
 *
 * 0x5B54BD7ACF637593

 * 
 * ------------------------------------------------------------------
 * @param {string[]} parent
 * @param {number} index
 * @returns {string}  
 */
export function dataarrayGetDict(parent: string[], index: number): string {
	const dataarrayGetDict_result = Citizen.invokeNative<string>('0x5B54BD7ACF637593', parent, index);
	return dataarrayGetDict_result;
}