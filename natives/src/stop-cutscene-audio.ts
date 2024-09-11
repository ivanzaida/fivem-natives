/**
 * AUDIO:STOP_CUTSCENE_AUDIO
 *
 * 0x583A32C5EA5495CD

 * 
 * ------------------------------------------------------------------
 */
export function stopCutsceneAudio(): void {
	const stopCutsceneAudio_result = Citizen.invokeNative<void>('0x583A32C5EA5495CD', );
	return stopCutsceneAudio_result;
}