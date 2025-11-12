/**
 * AUDIO:PLAY_SOUND_FRONTEND
 *
 * 0xBF3D28CA44F3BE2D

 * 
 * If the sound is to be manipulated - i.e. it's a looped that needs to be stopped - then a SoundId should be acquired and used, otherwise use -1 for this parameter.
 * If the sound has a Pan or a SpeakerMask set by the sound designer then the it will play using these settings, otherwise it will play from dead ahead (0°).
 * 
 * List: https://pastebin.com/DCeRiaLJ
 * 
 * All occurrences as of Cayo Perico Heist DLC (b2189), sorted alphabetically and identical lines removed: https://git.io/JtLxM
 * 
 * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} soundId
 * @param {string} soundName
 * @param {string} setName
 * @param {boolean} enableOnReplay
 */
export function playSoundFrontend(soundId: number, soundName: string, setName: string = null!, enableOnReplay: boolean = true): void {
	const playSoundFrontend_result = Citizen.invokeNative<void>('0xBF3D28CA44F3BE2D', soundId, soundName, setName, enableOnReplay);
	return playSoundFrontend_result;
}