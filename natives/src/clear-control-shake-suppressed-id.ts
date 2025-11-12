import { EControlType } from '@ivanzaida/structures'

/**
 * PAD:CLEAR_CONTROL_SHAKE_SUPPRESSED_ID
 *
 * 0xF27E6847E6EE009E

 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 */
export function clearControlShakeSuppressedId(control: EControlType | number): void {
	const clearControlShakeSuppressedId_result = Citizen.invokeNative<void>('0xF27E6847E6EE009E', control);
	return clearControlShakeSuppressedId_result;
}