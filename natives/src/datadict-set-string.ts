/**
 * DATAFILE:DATADICT_SET_STRING
 *
 * 0xA47FC2B828F55E4D

 * 
 * This will overwrite any existing dictionary entry with the same name
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} dict
 * @param {string} name
 * @param {string} value
 */
export function datadictSetString(dict: string, name: string, value: string): void {
	const datadictSetString_result = Citizen.invokeNative<void>('0xA47FC2B828F55E4D', dict, name, value);
	return datadictSetString_result;
}