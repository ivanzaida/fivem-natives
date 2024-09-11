import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_ATTACHED_TO
 *
 * 0xAD0F9A0F639285AA

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {EntityIndex}  
 */
export function getEntityAttachedTo(entity: EntityIndex): EntityIndex {
	const getEntityAttachedTo_result = Citizen.invokeNative<EntityIndex>('0xAD0F9A0F639285AA', entity);
	return getEntityAttachedTo_result;
}