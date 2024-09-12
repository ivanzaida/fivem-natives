/**
 * CFX:GET_TIMECYCLE_MODIFIER_VAR_COUNT
 *
 * 0X60FB60FE

 * 
 * ------------------------------------------------------------------
 * @param {string} modifierName The timecycle modifier name.
 * @returns {number}  The amount of variables used on a specified timecycle modifier.
 */
export function getTimecycleModifierVarCount(modifierName: string): number {
	const getTimecycleModifierVarCount_result = Citizen.invokeNative<number>('0X60FB60FE', modifierName);
	return getTimecycleModifierVarCount_result;
}