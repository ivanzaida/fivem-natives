import { EntityIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:ATTACH_TV_AUDIO_TO_ENTITY
 *
 * 0xC850B483ACC98D91

 * 
 * Might be more appropriate in AUDIO?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function attachTvAudioToEntity(entity: EntityIndex): void {
	const attachTvAudioToEntity_result = Citizen.invokeNative<void>('0xC850B483ACC98D91', entity);
	return attachTvAudioToEntity_result;
}