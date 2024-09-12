/**
 * AUDIO:STOP_SYNCHRONIZED_AUDIO_EVENT
 *
 * 0x32FA1FA41E0D63D1

 * 
 * ------------------------------------------------------------------
 * @param {number} sceneId
 * @returns {boolean}  
 */
export function stopSynchronizedAudioEvent(sceneId: number): boolean {
	const stopSynchronizedAudioEvent_result = Citizen.invokeNative<boolean>('0x32FA1FA41E0D63D1', sceneId);
	return stopSynchronizedAudioEvent_result;
}