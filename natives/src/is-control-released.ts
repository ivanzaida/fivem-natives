import { EControlType, EControlAction } from '@ivanzaida/structures'

/**
 * PAD:IS_CONTROL_RELEASED
 *
 * 0x9924343EC2EAE1E4

 * 
 * Returns whether a control is currently _not_ pressed.
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {EControlAction} action
 * @returns {boolean}  
 */
export function isControlReleased(control: EControlType | number, action: EControlAction | number): boolean {
	const isControlReleased_result = Citizen.invokeNative<boolean>('0x9924343EC2EAE1E4', control, action);
	return isControlReleased_result;
}