/**
 * CFX:SET_TIMECYCLE_MODIFIER_VAR
 *
 * 0X6E0A422B

 * 
 * ------------------------------------------------------------------
 * @param {string} modifierName The name of timecycle modifier.
 * @param {string} varName The name of timecycle variable.
 * @param {number} value1 The first value of variable.
 * @param {number} value2 The second value of variable.
 */
export function setTimecycleModifierVar(modifierName: string, varName: string, value1: number, value2: number): void {
	const setTimecycleModifierVar_result = Citizen.invokeNative<void>('0X6E0A422B', modifierName, varName, value1, value2);
	return setTimecycleModifierVar_result;
}