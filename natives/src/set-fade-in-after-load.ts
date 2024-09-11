/**
 * MISC:SET_FADE_IN_AFTER_LOAD
 *
 * 0xC83C5315C571C2FE

 * 
 * ------------------------------------------------------------------
 * @param {boolean} fadeIn
 */
export function setFadeInAfterLoad(fadeIn: boolean): void {
	const setFadeInAfterLoad_result = Citizen.invokeNative<void>('0xC83C5315C571C2FE', fadeIn);
	return setFadeInAfterLoad_result;
}