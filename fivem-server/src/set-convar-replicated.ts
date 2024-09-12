/**
 * CFX:SET_CONVAR_REPLICATED
 *
 * 0XF292858C

 * Used to replicate a server variable onto clients.
 * 
 * ------------------------------------------------------------------
 * @param {string} varName The console variable name.
 * @param {string} value The value to set for the given console variable.
 */
export function setConvarReplicated(varName: string, value: string): void {
	const setConvarReplicated_result = Citizen.invokeNative<void>('0XF292858C', varName, value);
	return setConvarReplicated_result;
}