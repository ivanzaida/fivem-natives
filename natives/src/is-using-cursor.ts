import { EControlType } from '@ivanzaida/structures'

/**
 * PAD:IS_USING_CURSOR
 *
 * 0xD67885288D4A40CB

 * 
 * When this returns false, the values inside the cursor CONTROL_ACTIONS will be zero.
 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @returns {boolean}  
 */
export function isUsingCursor(control: EControlType | number): boolean {
	const isUsingCursor_result = Citizen.invokeNative<boolean>('0xD67885288D4A40CB', control);
	return isUsingCursor_result;
}