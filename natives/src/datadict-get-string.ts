/**
 * DATAFILE:DATADICT_GET_STRING
 *
 * 0xC2ED3920E9296F36

 * 
 * ------------------------------------------------------------------
 * @param {string} dict
 * @param {string} name
 * @returns {string}  
 */
export function datadictGetString(dict: string, name: string): string {
	const datadictGetString_result = Citizen.invokeNative<string>('0xC2ED3920E9296F36', dict, name);
	return datadictGetString_result;
}