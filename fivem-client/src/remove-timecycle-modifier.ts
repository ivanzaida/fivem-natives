/**
 * CFX:REMOVE_TIMECYCLE_MODIFIER
 *
 * 0X36DF8612

 * 
 * ------------------------------------------------------------------
 * @param {string} modifierName The timecycle modifier name.
 */
export function removeTimecycleModifier(modifierName: string): void {
	const removeTimecycleModifier_result = Citizen.invokeNative<void>('0X36DF8612', modifierName);
	return removeTimecycleModifier_result;
}