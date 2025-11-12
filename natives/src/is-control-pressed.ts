import { EControlType, EControlAction } from '@ivanzaida/structures'

/**
 * PAD:IS_CONTROL_PRESSED
 *
 * 0x6D05C5731A838CB3

 * 
 * Returns whether a control is currently pressed.
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {EControlAction} action
 * @returns {boolean}  
 */
export function isControlPressed(control: EControlType | number, action: EControlAction | number): boolean {
	const isControlPressed_result = Citizen.invokeNative<boolean>('0x6D05C5731A838CB3', control, action);
	return isControlPressed_result;
}