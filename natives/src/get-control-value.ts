import { EControlType, EControlAction } from '@ivanzaida/structures'

/**
 * PAD:GET_CONTROL_VALUE
 *
 * 0x6C29A57AC29D7033

 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {EControlAction} action
 * @returns {number}  
 */
export function getControlValue(control: EControlType | number, action: EControlAction | number): number {
	const getControlValue_result = Citizen.invokeNative<number>('0x6C29A57AC29D7033', control, action);
	return getControlValue_result;
}