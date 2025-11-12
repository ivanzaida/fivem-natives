import { EControlType, EControlAction } from '@ivanzaida/structures'

/**
 * PAD:GET_CONTROL_NORMAL
 *
 * 0xB504E1B50AA21FC5

 * 
 * Returns the value of GET_CONTROL_VALUE normalized (i.e. a real number value between -1 and 1)
 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {EControlAction} action
 * @returns {number}  
 */
export function getControlNormal(control: EControlType | number, action: EControlAction | number): number {
	const getControlNormal_result = Citizen.invokeNative<number>('0xB504E1B50AA21FC5', control, action);
	return getControlNormal_result;
}