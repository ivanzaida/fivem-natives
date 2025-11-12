/**
 * CFX:ADD_CONVAR_CHANGE_LISTENER
 *
 * 0xAB7F7241

 * Adds a listener for Console Variable changes.The function called expects to match the following signature:```tsfunction ConVarChangeListener(conVarName: string, reserved: any);``` conVarName: The ConVar that changed. reserved: Currently unused.
 * 
 * ------------------------------------------------------------------
 * @param {string} conVarFilter The Console Variable to listen for, this can be a pattern like "test
 * @param {Function} handler The handler function.
 * @returns {number}  A cookie to remove the change handler.
 */
export function addConvarChangeListener(conVarFilter: string, handler: Function): number {
	const addConvarChangeListener_result = Citizen.invokeNative<number>('0xAB7F7241', conVarFilter, handler);
	return addConvarChangeListener_result;
}