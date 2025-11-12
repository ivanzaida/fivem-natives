import { EControlType } from '@ivanzaida/structures'

/**
 * PAD:SET_CONTROL_TRIGGER_SHAKE
 *
 * 0x238500FECB845FFF

 * 
 * Does nothing (it's a nullsub).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @param {number} leftDuration
 * @param {number} leftFrequency
 * @param {number} rightDuration
 * @param {number} rightFrequency
 */
export function setControlTriggerShake(control: EControlType | number, leftDuration: number, leftFrequency: number, rightDuration: number, rightFrequency: number): void {
	const setControlTriggerShake_result = Citizen.invokeNative<void>('0x238500FECB845FFF', control, leftDuration, leftFrequency, rightDuration, rightFrequency);
	return setControlTriggerShake_result;
}