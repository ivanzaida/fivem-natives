/**
 * CFX:GET_TIMECYCLE_MODIFIER_NAME_BY_INDEX
 *
 * 0X28CB8608

 * 
 * ------------------------------------------------------------------
 * @param {number} modifierIndex The timecycle modifier index.
 * @returns {string}  The timecycle modifier name.
 */
export function getTimecycleModifierNameByIndex(modifierIndex: number): string {
	const getTimecycleModifierNameByIndex_result = Citizen.invokeNative<string>('0X28CB8608', modifierIndex);
	return getTimecycleModifierNameByIndex_result;
}