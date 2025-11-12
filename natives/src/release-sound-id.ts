/**
 * AUDIO:RELEASE_SOUND_ID
 *
 * 0x394AFAC073E1F277

 * 
 * This should be called once a sound has finished being manipulated by the script so that its SoundId can be released and re-used.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} soundId
 */
export function releaseSoundId(soundId: number): void {
	const releaseSoundId_result = Citizen.invokeNative<void>('0x394AFAC073E1F277', soundId);
	return releaseSoundId_result;
}