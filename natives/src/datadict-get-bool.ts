/**
 * DATAFILE:DATADICT_GET_BOOL
 *
 * 0x9F0EF572EFEE0A9C

 * 
 * ------------------------------------------------------------------
 * @param {string} dict
 * @param {string} name
 * @returns {boolean}  
 */
export function datadictGetBool(dict: string, name: string): boolean {
	const datadictGetBool_result = Citizen.invokeNative<boolean>('0x9F0EF572EFEE0A9C', dict, name);
	return datadictGetBool_result;
}