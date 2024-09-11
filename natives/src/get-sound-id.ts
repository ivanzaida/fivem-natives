/**
 * AUDIO:GET_SOUND_ID
 *
 * 0xCA369FBC0DE29517

 * This function returns a new SoundId, which is used for keeping track of sounds after they've been triggered -
 * use this if you need to control a sound after it's been started, for instance to stop a looping sound, or to change a sound's pitch midway through playback.
 * The SoundId is always an integer greater than or equal to zero; if a playback function has a SoundId field but the sound doesn't need to be altered after
 * triggering then pass a value of -1 for fire-and-forget playback, rather than getting a SoundId.
 * SoundIds can be reused, without needing to release them and grab a new one. If a sound's finished playing,
 * you can reuse its SoundId to kick off another one. If the sound's not finished playing,
 * it'll be stopped first (fading out or whatever is set up in RAVE by the sound designer), and the new one kicked off; usually it is safer to just get a new SoundId.
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getSoundId(): number {
	const getSoundId_result = Citizen.invokeNative<number>('0xCA369FBC0DE29517', );
	return getSoundId_result;
}