/**
 * CFX:GET_CONVAR_BOOL
 *
 * 0x7E8EBFE5

 * Can be used to get a console variable casted back to `bool`.
 * 
 * ------------------------------------------------------------------
 * @param {string} varName The console variable to look up.
 * @param {boolean} defaultValue The default value to set if none is found.
 * @returns {boolean}  Returns the convar value if it can be found, otherwise it returns the assigned `default`.
 */
export function getConvarBool(varName: string, defaultValue: boolean): boolean {
	const getConvarBool_result = Citizen.invokeNative<boolean>('0x7E8EBFE5', varName, defaultValue);
	return getConvarBool_result;
}