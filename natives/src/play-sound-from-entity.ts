import { EntityIndex } from '@ivanzaida/structures'

/**
 * AUDIO:PLAY_SOUND_FROM_ENTITY
 *
 * 0xBD618A73193F9982

 * 
 * The sound's position will track the entity's position as it moves. If the sound doesn't need to be stopped (or have variables passed to it) then a soundId of -1 should be used,
 * otherwise use GET_SOUND_ID to assign the sound a SoundId.
 * 
 * All found occurrences in b617d, sorted alphabetically and identical lines removed: https://pastebin.com/f2A7vTj0
 * No changes made in b678d.
 * 
 * gtaforums.com/topic/795622-audio-for-mods
 * 
 * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} soundId
 * @param {string} soundName
 * @param {EntityIndex} entity
 * @param {string} setName
 * @param {boolean} overNetwork
 * @param {number} networkRange
 */
export function playSoundFromEntity(soundId: number, soundName: string, entity: EntityIndex, setName: string = null!, overNetwork: boolean = false, networkRange: number = 0): void {
	const playSoundFromEntity_result = Citizen.invokeNative<void>('0xBD618A73193F9982', soundId, soundName, entity, setName, overNetwork, networkRange);
	return playSoundFromEntity_result;
}