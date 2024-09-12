/**
 * MISC:SET_RANDOM_SEED
 *
 * 0x3B9F35917EDE3ACB

 * 
 * ------------------------------------------------------------------
 * @param {number} newSeed
 */
export function setRandomSeed(newSeed: number): void {
	const setRandomSeed_result = Citizen.invokeNative<void>('0x3B9F35917EDE3ACB', newSeed);
	return setRandomSeed_result;
}