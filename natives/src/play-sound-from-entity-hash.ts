import { EntityIndex } from '@ivanzaida/structures'

/**
 * AUDIO:PLAY_SOUND_FROM_ENTITY_HASH
 *
 * 0x299B36D8A0393C3E

 * 
 * The sound's position will track the entity's position as it moves. If the sound doesn't need to be stopped (or have variables passed to it) then a soundId of -1 should be used,
 * otherwise use GET_SOUND_ID to assign the sound a SoundId.
 * 
 * Only used with "formation_flying_blips_soundset" and "biker_formation_blips_soundset".
 * p1 is always the model of p2
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} soundId
 * @param {number} soundNameHash
 * @param {EntityIndex} entity
 * @param {number} setName
 * @param {boolean} overNetwork
 * @param {number} networkRange
 */
export function playSoundFromEntityHash(soundId: number, soundNameHash: number, entity: EntityIndex, setName: number = 0, overNetwork: boolean = false, networkRange: number = 0): void {
	const playSoundFromEntityHash_result = Citizen.invokeNative<void>('0x299B36D8A0393C3E', soundId, soundNameHash, entity, setName, overNetwork, networkRange);
	return playSoundFromEntityHash_result;
}