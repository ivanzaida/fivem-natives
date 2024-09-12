/**
 * CFX:SET_CONVAR_SERVER_INFO
 *
 * 0X9338D547

 * 
 * ------------------------------------------------------------------
 * @param {string} varName
 * @param {string} value
 */
export function setConvarServerInfo(varName: string, value: string): void {
	const setConvarServerInfo_result = Citizen.invokeNative<void>('0X9338D547', varName, value);
	return setConvarServerInfo_result;
}