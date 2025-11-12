/**
 * AUDIO:STOP_AUDIO_SCENES
 *
 * 0x3C6BB574B1895B94

 * 
 * ??
 * 
 * 
 * ------------------------------------------------------------------
 */
export function stopAudioScenes(): void {
	const stopAudioScenes_result = Citizen.invokeNative<void>('0x3C6BB574B1895B94', );
	return stopAudioScenes_result;
}