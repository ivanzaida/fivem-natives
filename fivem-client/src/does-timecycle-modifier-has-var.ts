/**
 * CFX:DOES_TIMECYCLE_MODIFIER_HAS_VAR
 *
 * 0xC53BB6D3

 * 
 * ------------------------------------------------------------------
 * @param {string} modifierName The name of timecycle modifier.
 * @param {string} varName The name of timecycle variable.
 * @returns {boolean}  Whether or not variable by name was found on the specified timecycle modifier.
 */
export function doesTimecycleModifierHasVar(modifierName: string, varName: string): boolean {
	const doesTimecycleModifierHasVar_result = Citizen.invokeNative<boolean>('0xC53BB6D3', modifierName, varName);
	return doesTimecycleModifierHasVar_result;
}