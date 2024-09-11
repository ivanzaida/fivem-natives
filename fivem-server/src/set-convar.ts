/**
 * CFX:SET_CONVAR
 *
 * 0X341B16D2

 * 
 * ------------------------------------------------------------------
 * @param {string} varName
 * @param {string} value
 */
export function setConvar(varName: string, value: string): void {
	const setConvar_result = Citizen.invokeNative<void>('0X341B16D2', varName, value);
	return setConvar_result;
}