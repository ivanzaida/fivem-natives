/**
 * VEHICLE:SET_RANDOM_BOATS_MP
 *
 * 0xDB7CCABFFA928C83

 * 
 * ------------------------------------------------------------------
 * @param {boolean} randomBoatsFlag
 */
export function setRandomBoatsMp(randomBoatsFlag: boolean): void {
	const setRandomBoatsMp_result = Citizen.invokeNative<void>('0xDB7CCABFFA928C83', randomBoatsFlag);
	return setRandomBoatsMp_result;
}