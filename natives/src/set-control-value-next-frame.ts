import { EControlType, EControlAction } from '@ivanzaida/structures'

/**
 * PAD:SET_CONTROL_VALUE_NEXT_FRAME
 *
 * 0x11E5CA6A9B6D7D2A

 * 
 * This is for simulating player input.
 * value is a float value from 0 - 1
 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {EControlAction} action
 * @param {number} value
 * @returns {boolean}  
 */
export function setControlValueNextFrame(control: EControlType | number, action: EControlAction | number, value: number): boolean {
	const setControlValueNextFrame_result = Citizen.invokeNative<boolean>('0x11E5CA6A9B6D7D2A', control, action, value);
	return setControlValueNextFrame_result;
}