/**
 * CFX:REMOVE_TIMECYCLE_MODIFIER_VAR
 *
 * 0x5A5E0D05

 * 
 * ------------------------------------------------------------------
 * @param {string} modifierName The name of timecycle modifier.
 * @param {string} varName The name of timecycle variable.
 */
export function removeTimecycleModifierVar(modifierName: string, varName: string): void {
	const removeTimecycleModifierVar_result = Citizen.invokeNative<void>('0x5A5E0D05', modifierName, varName);
	return removeTimecycleModifierVar_result;
}