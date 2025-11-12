import { EControlType, EControlAction } from '@ivanzaida/structures'

/**
 * PAD:IS_CONTROL_JUST_PRESSED
 *
 * 0x875A214D5EBCA509

 * 
 * Returns whether a control was newly pressed since the last check.
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {EControlAction} action
 * @returns {boolean}  
 */
export function isControlJustPressed(control: EControlType | number, action: EControlAction | number): boolean {
	const isControlJustPressed_result = Citizen.invokeNative<boolean>('0x875A214D5EBCA509', control, action);
	return isControlJustPressed_result;
}