/**
 * MISC:SET_FADE_IN_AFTER_DEATH_ARREST
 *
 * 0x40AC02FA167D4D0A

 * 
 * After each suppressed fade the variable is set back to false Note:
 * The mission cleanup doesn't reset the variable so it's up to the script to leave call SET_FADE_IN_AFTER_DEATH_ARREST (true) when done with the particular mission.
 * 
 * Sets whether the game should fade in after the player dies or is arrested.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} doFade
 */
export function setFadeInAfterDeathArrest(doFade: boolean): void {
	const setFadeInAfterDeathArrest_result = Citizen.invokeNative<void>('0x40AC02FA167D4D0A', doFade);
	return setFadeInAfterDeathArrest_result;
}