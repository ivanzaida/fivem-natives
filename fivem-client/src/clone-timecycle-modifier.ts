/**
 * CFX:CLONE_TIMECYCLE_MODIFIER
 *
 * 0X54D636B3

 * 
 * ------------------------------------------------------------------
 * @param {string} sourceModifierName The source timecycle name.
 * @param {string} clonedModifierName The clone timecycle name, must be unique.
 * @returns {number}  The cloned timecycle modifier index, or -1 if failed.
 */
export function cloneTimecycleModifier(sourceModifierName: string, clonedModifierName: string): number {
	const cloneTimecycleModifier_result = Citizen.invokeNative<number>('0X54D636B3', sourceModifierName, clonedModifierName);
	return cloneTimecycleModifier_result;
}