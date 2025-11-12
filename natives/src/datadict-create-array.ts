/**
 * DATAFILE:DATADICT_CREATE_ARRAY
 *
 * 0xC24FD04ED00751BC

 * 
 * This will overwrite any existing entry in the parent dictionary
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} parent
 * @param {string} name
 * @returns {string[]}  
 */
export function datadictCreateArray(parent: string, name: string): string[] {
	const datadictCreateArray_result = Citizen.invokeNative<string[]>('0xC24FD04ED00751BC', parent, name);
	return datadictCreateArray_result;
}