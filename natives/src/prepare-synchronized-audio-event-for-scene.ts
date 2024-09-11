/**
 * AUDIO:PREPARE_SYNCHRONIZED_AUDIO_EVENT_FOR_SCENE
 *
 * 0x20279DB6A8C883E5

 * 
 * ------------------------------------------------------------------
 * @param {number} sceneId
 * @param {string} audioEvent
 * @returns {boolean}  
 */
export function prepareSynchronizedAudioEventForScene(sceneId: number, audioEvent: string): boolean {
	const prepareSynchronizedAudioEventForScene_result = Citizen.invokeNative<boolean>('0x20279DB6A8C883E5', sceneId, audioEvent);
	return prepareSynchronizedAudioEventForScene_result;
}