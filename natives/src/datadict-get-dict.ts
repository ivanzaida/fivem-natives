/**
 * DATAFILE:DATADICT_GET_DICT
 *
 * 0x6BDE656A2A2932FC

 * 
 * ------------------------------------------------------------------
 * @param {string} parent
 * @param {string} name
 * @returns {string}  
 */
export function datadictGetDict(parent: string, name: string): string {
	const datadictGetDict_result = Citizen.invokeNative<string>('0x6BDE656A2A2932FC', parent, name);
	return datadictGetDict_result;
}