import { FloatRef } from '@ivanzaida/structures'

/**
 * CFX:GET_TIMECYCLE_MODIFIER_VAR
 *
 * 0xA7109E12

 * 
 * ------------------------------------------------------------------
 * @param {string} modifierName The name of timecycle modifier.
 * @param {string} varName The name of timecycle variable.
 * @param {FloatRef} value1 [Ref]
 * @param {FloatRef} value2 [Ref]
 * @returns {boolean}  Whether or not variable by name was found on the specified timecycle modifier.
 */
export function getTimecycleModifierVar(modifierName: string, varName: string, value1: FloatRef /* ptr */, value2: FloatRef /* ptr */): boolean {
	const getTimecycleModifierVar_result = Citizen.invokeNative<boolean>('0xA7109E12', modifierName, varName, value1.dataView, value2.dataView);
	return getTimecycleModifierVar_result;
}