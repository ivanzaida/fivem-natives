import { EntityIndex, BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:GET_BLIP_FROM_ENTITY
 *
 * 0xCA048D064CB64920

 * 
 * Returns the Blip handle of given Entity.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {BlipIndex}  
 */
export function getBlipFromEntity(entity: EntityIndex): BlipIndex {
	const getBlipFromEntity_result = Citizen.invokeNative<BlipIndex>('0xCA048D064CB64920', entity);
	return getBlipFromEntity_result;
}