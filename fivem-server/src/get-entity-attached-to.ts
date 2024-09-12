import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_ENTITY_ATTACHED_TO
 *
 * 0XFE1589F9

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {EntityIndex}  
 */
export function getEntityAttachedTo(entity: EntityIndex): EntityIndex {
	const getEntityAttachedTo_result = Citizen.invokeNative<EntityIndex>('0XFE1589F9', entity);
	return getEntityAttachedTo_result;
}