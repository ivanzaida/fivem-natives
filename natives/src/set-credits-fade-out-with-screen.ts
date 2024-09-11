/**
 * MISC:SET_CREDITS_FADE_OUT_WITH_SCREEN
 *
 * 0x9969A63702BCDEFE

 * 
 * ------------------------------------------------------------------
 * @param {boolean} fade
 */
export function setCreditsFadeOutWithScreen(fade: boolean): void {
	const setCreditsFadeOutWithScreen_result = Citizen.invokeNative<void>('0x9969A63702BCDEFE', fade);
	return setCreditsFadeOutWithScreen_result;
}