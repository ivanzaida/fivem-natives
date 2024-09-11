/**
 * VEHICLE:SET_RANDOM_BOATS
 *
 * 0xBB7BF0D30DB04384

 * 
 * ------------------------------------------------------------------
 * @param {boolean} randomBoatsFlag
 */
export function setRandomBoats(randomBoatsFlag: boolean): void {
	const setRandomBoats_result = Citizen.invokeNative<void>('0xBB7BF0D30DB04384', randomBoatsFlag);
	return setRandomBoats_result;
}