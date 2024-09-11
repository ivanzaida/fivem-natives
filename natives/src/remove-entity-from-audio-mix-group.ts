import { EntityIndex } from '@ivanzaida/structures'

/**
 * AUDIO:REMOVE_ENTITY_FROM_AUDIO_MIX_GROUP
 *
 * 0x001B008A010F2FE6

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} fadeOut
 */
export function removeEntityFromAudioMixGroup(entity: EntityIndex, fadeOut: number = 0): void {
	const removeEntityFromAudioMixGroup_result = Citizen.invokeNative<void>('0x001B008A010F2FE6', entity, fadeOut);
	return removeEntityFromAudioMixGroup_result;
}