/**
 * DATAFILE:DATADICT_GET_FLOAT
 *
 * 0xA481424344CBC893

 * 
 * ------------------------------------------------------------------
 * @param {string} dict
 * @param {string} name
 * @returns {number}  
 */
export function datadictGetFloat(dict: string, name: string): number {
	const datadictGetFloat_result = Citizen.invokeNative<number>('0xA481424344CBC893', dict, name);
	return datadictGetFloat_result;
}