import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_SUBMERGED_LEVEL
 *
 * 0x837FF265C016E3B7

 * 
 * Get how much of the entity is submerged.  1.0f is whole entity.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {number}  
 */
export function getEntitySubmergedLevel(entity: EntityIndex): number {
	const getEntitySubmergedLevel_result = Citizen.invokeNative<number>('0x837FF265C016E3B7', entity);
	return getEntitySubmergedLevel_result;
}