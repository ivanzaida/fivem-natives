/**
 * AUDIO:PLAY_SYNCHRONIZED_AUDIO_EVENT
 *
 * 0x9DE3D932AA2B055C

 * 
 * ------------------------------------------------------------------
 * @param {number} sceneId
 * @returns {boolean}  
 */
export function playSynchronizedAudioEvent(sceneId: number): boolean {
	const playSynchronizedAudioEvent_result = Citizen.invokeNative<boolean>('0x9DE3D932AA2B055C', sceneId);
	return playSynchronizedAudioEvent_result;
}