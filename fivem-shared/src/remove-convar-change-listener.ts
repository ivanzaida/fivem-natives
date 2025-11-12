/**
 * CFX:REMOVE_CONVAR_CHANGE_LISTENER
 *
 * 0xEAC49841

 * 
 * ------------------------------------------------------------------
 * @param {number} cookie The cookie returned from [ADD_CONVAR_CHANGE_LISTENER](_0xAB7F7241)
 */
export function removeConvarChangeListener(cookie: number): void {
	const removeConvarChangeListener_result = Citizen.invokeNative<void>('0xEAC49841', cookie);
	return removeConvarChangeListener_result;
}