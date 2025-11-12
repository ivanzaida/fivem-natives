import { EControlType } from '@ivanzaida/structures'

/**
 * PAD:STOP_CONTROL_SHAKE
 *
 * 0x9683D8208E71E46D

 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 */
export function stopControlShake(control: EControlType | number): void {
	const stopControlShake_result = Citizen.invokeNative<void>('0x9683D8208E71E46D', control);
	return stopControlShake_result;
}