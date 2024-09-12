/**
 * CFX:CREATE_TIMECYCLE_MODIFIER
 *
 * 0X70FA2AFA

 * Create a clean timecycle modifier. See [`SET_TIMECYCLE_MODIFIER_VAR`](#_0x6E0A422B) to add variables.
 * 
 * ------------------------------------------------------------------
 * @param {string} modifierName The new timecycle name, must be unique.
 * @returns {number}  The created timecycle modifier index, or -1 if failed.
 */
export function createTimecycleModifier(modifierName: string): number {
	const createTimecycleModifier_result = Citizen.invokeNative<number>('0X70FA2AFA', modifierName);
	return createTimecycleModifier_result;
}