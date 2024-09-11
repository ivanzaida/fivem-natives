/**
 * CFX:SET_ROPE_LENGTH_CHANGE_RATE
 *
 * 0X69B680A7

 * Set's the ropes length change rate, which is the speed that rope should wind if started.
 * 
 * ------------------------------------------------------------------
 * @param {number} rope The rope to set the length change rate for.
 * @param {number} lengthChangeRate The rope's new length change rate.
 */
export function setRopeLengthChangeRate(rope: number, lengthChangeRate: number): void {
	const setRopeLengthChangeRate_result = Citizen.invokeNative<void>('0X69B680A7', rope, lengthChangeRate);
	return setRopeLengthChangeRate_result;
}