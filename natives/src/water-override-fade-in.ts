/**
 * MISC:WATER_OVERRIDE_FADE_IN
 *
 * 0x2E7312742ADECB25

 * 
 * ------------------------------------------------------------------
 * @param {number} time
 */
export function waterOverrideFadeIn(time: number): void {
	const waterOverrideFadeIn_result = Citizen.invokeNative<void>('0x2E7312742ADECB25', time);
	return waterOverrideFadeIn_result;
}