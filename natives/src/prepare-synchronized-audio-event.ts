/**
 * AUDIO:PREPARE_SYNCHRONIZED_AUDIO_EVENT
 *
 * 0xA8327B614CA7628F

 * 
 * p1 is always 0 in the scripts
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} audioEvent
 * @param {number} startOffsetMs
 * @returns {boolean}  
 */
export function prepareSynchronizedAudioEvent(audioEvent: string, startOffsetMs: number): boolean {
	const prepareSynchronizedAudioEvent_result = Citizen.invokeNative<boolean>('0xA8327B614CA7628F', audioEvent, startOffsetMs);
	return prepareSynchronizedAudioEvent_result;
}