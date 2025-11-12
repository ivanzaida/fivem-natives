/**
 * MISC:SET_FADE_OUT_AFTER_DEATH
 *
 * 0x31E8D1058586E006

 * 
 * After each suppressed fade the variable is set back to false Note:
 * The mission cleanup doesn't reset the variable so it's up to the script to call SET_FADE_OUT_AFTER_ARREST (true) when done with the particular mission.
 * 
 * Sets whether the game should fade out after the player dies.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} doFade
 */
export function setFadeOutAfterDeath(doFade: boolean): void {
	const setFadeOutAfterDeath_result = Citizen.invokeNative<void>('0x31E8D1058586E006', doFade);
	return setFadeOutAfterDeath_result;
}