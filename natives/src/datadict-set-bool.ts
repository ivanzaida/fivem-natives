/**
 * DATAFILE:DATADICT_SET_BOOL
 *
 * 0xC98890A6BBB9A0D4

 * 
 * This will overwrite any existing dictionary entry with the same name
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} dict
 * @param {string} name
 * @param {boolean} value
 */
export function datadictSetBool(dict: string, name: string, value: boolean): void {
	const datadictSetBool_result = Citizen.invokeNative<void>('0xC98890A6BBB9A0D4', dict, name, value);
	return datadictSetBool_result;
}