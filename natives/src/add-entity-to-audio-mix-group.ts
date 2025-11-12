import { EntityIndex } from '@ivanzaida/structures'

/**
 * AUDIO:ADD_ENTITY_TO_AUDIO_MIX_GROUP
 *
 * 0x616C2EAE947E6027

 * 
 * All found occurrences in b678d:
 * https://pastebin.com/ceu67jz8
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {string} groupName
 * @param {number} fadeIn
 */
export function addEntityToAudioMixGroup(entity: EntityIndex, groupName: string, fadeIn: number = 0): void {
	const addEntityToAudioMixGroup_result = Citizen.invokeNative<void>('0x616C2EAE947E6027', entity, groupName, fadeIn);
	return addEntityToAudioMixGroup_result;
}