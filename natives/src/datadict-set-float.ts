/**
 * DATAFILE:DATADICT_SET_FLOAT
 *
 * 0xEA11FA8AE2EB4025

 * 
 * This will overwrite any existing dictionary entry with the same name
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} dict
 * @param {string} name
 * @param {number} value
 */
export function datadictSetFloat(dict: string, name: string, value: number): void {
	const datadictSetFloat_result = Citizen.invokeNative<void>('0xEA11FA8AE2EB4025', dict, name, value);
	return datadictSetFloat_result;
}