/**
 * CAM:DO_SCREEN_FADE_OUT
 *
 * 0x8F72AF14CE5AACE4

 * 
 * Fades the screen out.
 * 
 * duration: The time the fade should take, in milliseconds.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} time
 */
export function doScreenFadeOut(time: number): void {
	const doScreenFadeOut_result = Citizen.invokeNative<void>('0x8F72AF14CE5AACE4', time);
	return doScreenFadeOut_result;
}