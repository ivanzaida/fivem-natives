import { EControlType } from '@ivanzaida/structures'

/**
 * PAD:IS_USING_KEYBOARD_AND_MOUSE
 *
 * 0xAE231F549813BBDF

 * 
 * control: unused parameter
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @returns {boolean}  
 */
export function isUsingKeyboardAndMouse(control: EControlType | number): boolean {
	const isUsingKeyboardAndMouse_result = Citizen.invokeNative<boolean>('0xAE231F549813BBDF', control);
	return isUsingKeyboardAndMouse_result;
}