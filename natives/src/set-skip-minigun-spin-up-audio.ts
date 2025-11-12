/**
 * AUDIO:SET_SKIP_MINIGUN_SPIN_UP_AUDIO
 *
 * 0xE9B1F35A218F1FC7

 * 
 * Set minigun audio skips the spin-up - don't forget to set this back to false after using it!
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} setSkipSpinUp
 */
export function setSkipMinigunSpinUpAudio(setSkipSpinUp: boolean): void {
	const setSkipMinigunSpinUpAudio_result = Citizen.invokeNative<void>('0xE9B1F35A218F1FC7', setSkipSpinUp);
	return setSkipMinigunSpinUpAudio_result;
}