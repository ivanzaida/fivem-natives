/**
 * CUTSCENE:SET_CUTSCENE_MULTIHEAD_FADE
 *
 * 0x7882946B06ED216B

 * 
 * ------------------------------------------------------------------
 * @param {boolean} fadeIn
 * @param {boolean} instant
 * @param {boolean} manual
 * @param {boolean} fullscreenMovie
 */
export function setCutsceneMultiheadFade(fadeIn: boolean, instant: boolean, manual: boolean, fullscreenMovie: boolean = false): void {
	const setCutsceneMultiheadFade_result = Citizen.invokeNative<void>('0x7882946B06ED216B', fadeIn, instant, manual, fullscreenMovie);
	return setCutsceneMultiheadFade_result;
}