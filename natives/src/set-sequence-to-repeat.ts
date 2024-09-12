import { SequenceIndex, ERepeatmode } from '@ivanzaida/structures'

/**
 * TASK:SET_SEQUENCE_TO_REPEAT
 *
 * 0xC58DD79B4CA8487F

 * 
 * ------------------------------------------------------------------
 * @param {SequenceIndex} sequence
 * @param {ERepeatmode} doRepeat
 */
export function setSequenceToRepeat(sequence: SequenceIndex, doRepeat: ERepeatmode | number): void {
	const setSequenceToRepeat_result = Citizen.invokeNative<void>('0xC58DD79B4CA8487F', sequence, doRepeat);
	return setSequenceToRepeat_result;
}