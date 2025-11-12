/**
 * CAM:DO_SCREEN_FADE_IN
 *
 * 0x10B228D2FDB7AF16

 * 
 * Fades the screen in.
 * 
 * duration: The time the fade should take, in milliseconds.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} time
 */
export function doScreenFadeIn(time: number): void {
	const doScreenFadeIn_result = Citizen.invokeNative<void>('0x10B228D2FDB7AF16', time);
	return doScreenFadeIn_result;
}