/**
 * MISC:SET_FADE_OUT_AFTER_ARREST
 *
 * 0x332262819D51DF61

 * 
 * After each suppressed fade the variable is set back to false Note:
 * The mission cleanup doesn't reset the variable so it's up to the script to call SET_FADE_OUT_AFTER_ARREST (true) when done with the particular mission.
 * 
 * Sets whether the game should fade out after the player is arrested.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} doFade
 */
export function setFadeOutAfterArrest(doFade: boolean): void {
	const setFadeOutAfterArrest_result = Citizen.invokeNative<void>('0x332262819D51DF61', doFade);
	return setFadeOutAfterArrest_result;
}