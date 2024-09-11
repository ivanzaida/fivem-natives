/**
 * CFX:GET_TIMECYCLE_MODIFIER_INDEX_BY_NAME
 *
 * 0X5F4CD0E2

 * 
 * ------------------------------------------------------------------
 * @param {string} modifierName The timecycle modifier name.
 * @returns {number}  The timecycle modifier index.
 */
export function getTimecycleModifierIndexByName(modifierName: string): number {
	const getTimecycleModifierIndexByName_result = Citizen.invokeNative<number>('0X5F4CD0E2', modifierName);
	return getTimecycleModifierIndexByName_result;
}