/**
 * CUTSCENE:SET_CUTSCENE_MULTIHEAD_FADE_MANUAL
 *
 * 0x1231218F0BB0653E

 * 
 * ------------------------------------------------------------------
 * @param {boolean} manual
 */
export function setCutsceneMultiheadFadeManual(manual: boolean): void {
	const setCutsceneMultiheadFadeManual_result = Citizen.invokeNative<void>('0x1231218F0BB0653E', manual);
	return setCutsceneMultiheadFadeManual_result;
}