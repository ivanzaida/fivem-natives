import { EControlType } from '@ivanzaida/structures'

/**
 * PAD:SET_CONTROL_SHAKE
 *
 * 0x97A041099E92C69F

 * 
 * control: see IS_CONTROL_ENABLED
 * duration in milliseconds
 * frequency should range from about 10 (slow vibration) to 255 (very fast)
 * 
 * example:
 * SET_CONTROL_SHAKE(PLAYER_CONTROL, 100, 200);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {number} duration
 * @param {number} frequency
 */
export function setControlShake(control: EControlType | number, duration: number, frequency: number): void {
	const setControlShake_result = Citizen.invokeNative<void>('0x97A041099E92C69F', control, duration, frequency);
	return setControlShake_result;
}