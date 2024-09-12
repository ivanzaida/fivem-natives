/**
 * CFX:GET_TIMECYCLE_MODIFIER_VAR_NAME_BY_INDEX
 *
 * 0xE874AB1D

 * 
 * ------------------------------------------------------------------
 * @param {string} modifierName The name of timecycle modifier.
 * @param {number} modifierVarIndex The index of a variable on the specified timecycle modifier.
 * @returns {string}  The name of a variable by index.
 */
export function getTimecycleModifierVarNameByIndex(modifierName: string, modifierVarIndex: number): string {
	const getTimecycleModifierVarNameByIndex_result = Citizen.invokeNative<string>('0xE874AB1D', modifierName, modifierVarIndex);
	return getTimecycleModifierVarNameByIndex_result;
}