/**
 * DATAFILE:DATADICT_GET_INT
 *
 * 0x81A9ADA13F72AEDD

 * 
 * ------------------------------------------------------------------
 * @param {string} dict
 * @param {string} name
 * @returns {number}  
 */
export function datadictGetInt(dict: string, name: string): number {
	const datadictGetInt_result = Citizen.invokeNative<number>('0x81A9ADA13F72AEDD', dict, name);
	return datadictGetInt_result;
}