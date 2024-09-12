/**
 * DATAFILE:DATAARRAY_ADD_DICT
 *
 * 0xFA8B98F1023E7B3E

 * 
 * ------------------------------------------------------------------
 * @param {string[]} arr
 * @returns {string}  
 */
export function dataarrayAddDict(arr: string[]): string {
	const dataarrayAddDict_result = Citizen.invokeNative<string>('0xFA8B98F1023E7B3E', arr);
	return dataarrayAddDict_result;
}