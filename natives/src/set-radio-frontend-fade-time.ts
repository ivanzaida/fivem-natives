/**
 * AUDIO:SET_RADIO_FRONTEND_FADE_TIME
 *
 * 0xACF6553AB8A4EA53

 * 
 * ------------------------------------------------------------------
 * @param {number} fadeTimeSeconds
 */
export function setRadioFrontendFadeTime(fadeTimeSeconds: number): void {
	const setRadioFrontendFadeTime_result = Citizen.invokeNative<void>('0xACF6553AB8A4EA53', fadeTimeSeconds);
	return setRadioFrontendFadeTime_result;
}