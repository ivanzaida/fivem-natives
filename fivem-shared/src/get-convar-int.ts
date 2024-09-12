/**
 * CFX:GET_CONVAR_INT
 *
 * 0X935C0AB2

 * Can be used to get a console variable casted back to `int` (an integer value).
 * 
 * ------------------------------------------------------------------
 * @param {string} varName The console variable to look up.
 * @param {number} default_ The default value to set if none is found (variable not set using [SET_CONVAR](_0x341B16D2), or not accessible).
 * @returns {number}  Returns the convar value if it can be found, otherwise it returns the assigned `default`.
 */
export function getConvarInt(varName: string, default_: number): number {
	const getConvarInt_result = Citizen.invokeNative<number>('0X935C0AB2', varName, default_);
	return getConvarInt_result;
}