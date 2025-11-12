/**
 * AUDIO:PLAY_SOUND_FROM_COORD
 *
 * 0xF37CDE164C892195

 * 
 * All found occurrences in b617d, sorted alphabetically and identical lines removed: https://pastebin.com/eeFc5DiW
 * 
 * gtaforums.com/topic/795622-audio-for-mods
 * 
 * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} soundId
 * @param {string} soundName
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {string} setName
 * @param {boolean} overNetwork
 * @param {number} networkRange
 * @param {boolean} isExteriorLoc
 */
export function playSoundFromCoord(soundId: number, soundName: string, positionX: number, positionY: number, positionZ: number, setName: string = null!, overNetwork: boolean = false, networkRange: number = 0, isExteriorLoc: boolean = false): void {
	const playSoundFromCoord_result = Citizen.invokeNative<void>('0xF37CDE164C892195', soundId, soundName, positionX, positionY, positionZ, setName, overNetwork, networkRange, isExteriorLoc);
	return playSoundFromCoord_result;
}