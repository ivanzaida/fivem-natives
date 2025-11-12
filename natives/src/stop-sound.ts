/**
 * AUDIO:STOP_SOUND
 *
 * 0x8E4825CCACA34B58

 * 
 * SoundId must be specified when triggering the sound effect and must be referred to when calling STOP_SOUND.
 * Calling STOP_SOUND on a sound that has finished playing will have no ill effects as long as the SoundId hasn't been released; attempting to stop an invalid SoundId will cause an assert.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} soundId
 */
export function stopSound(soundId: number): void {
	const stopSound_result = Citizen.invokeNative<void>('0x8E4825CCACA34B58', soundId);
	return stopSound_result;
}