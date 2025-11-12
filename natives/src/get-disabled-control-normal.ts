import { EControlType, EControlAction } from '@ivanzaida/structures'

/**
 * PAD:GET_DISABLED_CONTROL_NORMAL
 *
 * 0xF069618D9974EB9D

 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {EControlAction} action
 * @returns {number}  
 */
export function getDisabledControlNormal(control: EControlType | number, action: EControlAction | number): number {
	const getDisabledControlNormal_result = Citizen.invokeNative<number>('0xF069618D9974EB9D', control, action);
	return getDisabledControlNormal_result;
}