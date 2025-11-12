/**
 * AUDIO:PLAY_SOUND
 *
 * 0x85E83A170EF61477

 * 
 * If the sound is to be manipulated - i.e. stopped - then a SoundId should be acquired using GET_SOUND_ID(), otherwise use -1.
 * If this is used to play a sound for which no Pan or Speakermask is set by the sound designer, then the sound will play from the map's origin -
 * therefore this should only be used to play frontend sounds like menu bleeps or other artificially panned effects.
 * 
 * All found occurrences in b617d, sorted alphabetically and identical lines removed: https://pastebin.com/A8Ny8AHZ
 * 
 * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} soundId
 * @param {string} soundName
 * @param {string} setName
 * @param {boolean} overNetwork
 * @param {number} networkRange
 * @param {boolean} enableOnReplay
 */
export function playSound(soundId: number, soundName: string, setName: string = null!, overNetwork: boolean = false, networkRange: number = 0, enableOnReplay: boolean = true): void {
	const playSound_result = Citizen.invokeNative<void>('0x85E83A170EF61477', soundId, soundName, setName, overNetwork, networkRange, enableOnReplay);
	return playSound_result;
}