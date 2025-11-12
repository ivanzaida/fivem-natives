/**
 * DATAFILE:DATADICT_CREATE_DICT
 *
 * 0x5E298CFB85D1AEE8

 * 
 * This will overwrite any existing entry in the parent dictionary
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} parent
 * @param {string} name
 * @returns {string}  
 */
export function datadictCreateDict(parent: string, name: string): string {
	const datadictCreateDict_result = Citizen.invokeNative<string>('0x5E298CFB85D1AEE8', parent, name);
	return datadictCreateDict_result;
}