import { EControlType, EControlAction } from '@ivanzaida/structures'

/**
 * PAD:GET_CONTROL_INSTRUCTIONAL_BUTTONS_STRING
 *
 * 0xE934399D6F2C3AC5

 * 
 * allowXOSwap appears to always be true.
 * 
 * EG:
 * GET_CONTROL_INSTRUCTIONAL_BUTTON (2, 201, 1) /INPUT_FRONTEND_ACCEPT (e.g. Enter button)/
 * GET_CONTROL_INSTRUCTIONAL_BUTTON (2, 202, 1) /INPUT_FRONTEND_CANCEL (e.g. ESC button)/
 * GET_CONTROL_INSTRUCTIONAL_BUTTON (2, 51, 1) /INPUT_CONTEXT (e.g. E button)/
 * 
 * gtaforums.com/topic/819070-c-draw-instructional-buttons-scaleform-movie/#entry1068197378
 * 
 * control: unused parameter
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {EControlAction} action
 * @param {boolean} allowXOSwap
 * @returns {string}  
 */
export function getControlInstructionalButtonsString(control: EControlType | number, action: EControlAction | number, allowXOSwap: boolean = true): string {
	const getControlInstructionalButtonsString_result = Citizen.invokeNative<string>('0xE934399D6F2C3AC5', control, action, allowXOSwap);
	return getControlInstructionalButtonsString_result;
}