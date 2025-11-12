import { EControlType, EControlAction } from '@ivanzaida/structures'

/**
 * PAD:GET_CONTROL_UNBOUND_NORMAL
 *
 * 0x4AAE7492E7D81A57

 * 
 * Seems to return values between -1 and 1 for controls like gas and steering.
 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {EControlAction} action
 * @returns {number}  
 */
export function getControlUnboundNormal(control: EControlType | number, action: EControlAction | number): number {
	const getControlUnboundNormal_result = Citizen.invokeNative<number>('0x4AAE7492E7D81A57', control, action);
	return getControlUnboundNormal_result;
}