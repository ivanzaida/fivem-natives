/**
 * DATAFILE:DATADICT_GET_ARRAY
 *
 * 0x8FBF3E1A58A9D798

 * 
 * ------------------------------------------------------------------
 * @param {string} parent
 * @param {string} name
 * @returns {string[]}  
 */
export function datadictGetArray(parent: string, name: string): string[] {
	const datadictGetArray_result = Citizen.invokeNative<string[]>('0x8FBF3E1A58A9D798', parent, name);
	return datadictGetArray_result;
}