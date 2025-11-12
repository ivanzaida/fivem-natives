/**
 * DATAFILE:DATADICT_SET_INT
 *
 * 0xCBF0312D1370143F

 * 
 * This will overwrite any existing dictionary entry with the same name
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} dict
 * @param {string} name
 * @param {number} value
 */
export function datadictSetInt(dict: string, name: string, value: number): void {
	const datadictSetInt_result = Citizen.invokeNative<void>('0xCBF0312D1370143F', dict, name, value);
	return datadictSetInt_result;
}