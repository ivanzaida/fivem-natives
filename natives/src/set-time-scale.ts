/**
 * MISC:SET_TIME_SCALE
 *
 * 0xE6AC149D1121535D

 * 
 * This command will probably only be of use in cut scenes. For a slow motion effect, try setting NewTimeScale to 0.5.
 * Remember to set the Time Scale back to this once you have finished with the special effect.
 * 
 * Maximum value is 1.
 * At a value of 0 the game will still run at a minimum time scale.
 * 
 * Slow Motion 1: 0.6
 * Slow Motion 2: 0.4
 * Slow Motion 3: 0.2
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} newTimeScale
 */
export function setTimeScale(newTimeScale: number): void {
	const setTimeScale_result = Citizen.invokeNative<void>('0xE6AC149D1121535D', newTimeScale);
	return setTimeScale_result;
}