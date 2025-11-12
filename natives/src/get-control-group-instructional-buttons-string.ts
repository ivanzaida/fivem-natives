import { EControlType, EControlActionGroup } from '@ivanzaida/structures'

/**
 * PAD:GET_CONTROL_GROUP_INSTRUCTIONAL_BUTTONS_STRING
 *
 * 0xF761D79754BC3043

 * 
 * control: unused parameter
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {EControlActionGroup} actionGroup
 * @param {boolean} allowXOSwap
 * @returns {string}  
 */
export function getControlGroupInstructionalButtonsString(control: EControlType | number, actionGroup: EControlActionGroup | number, allowXOSwap: boolean = true): string {
	const getControlGroupInstructionalButtonsString_result = Citizen.invokeNative<string>('0xF761D79754BC3043', control, actionGroup, allowXOSwap);
	return getControlGroupInstructionalButtonsString_result;
}