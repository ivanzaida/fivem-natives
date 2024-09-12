/**
 * MISC:WATER_OVERRIDE_FADE_OUT
 *
 * 0xC425B6AC7F4443A0

 * 
 * ------------------------------------------------------------------
 * @param {number} time
 */
export function waterOverrideFadeOut(time: number): void {
	const waterOverrideFadeOut_result = Citizen.invokeNative<void>('0xC425B6AC7F4443A0', time);
	return waterOverrideFadeOut_result;
}