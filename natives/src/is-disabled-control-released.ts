import { EControlType, EControlAction } from '@ivanzaida/structures'

/**
 * PAD:IS_DISABLED_CONTROL_RELEASED
 *
 * 0xAA7C376C3569E05B

 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {EControlAction} action
 * @returns {boolean}  
 */
export function isDisabledControlReleased(control: EControlType | number, action: EControlAction | number): boolean {
	const isDisabledControlReleased_result = Citizen.invokeNative<boolean>('0xAA7C376C3569E05B', control, action);
	return isDisabledControlReleased_result;
}