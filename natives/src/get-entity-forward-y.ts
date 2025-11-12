import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_FORWARD_Y
 *
 * 0xD7A7E267DEDA742E

 * 
 * Gets the Y-component of the entity's forward vector.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {number}  
 */
export function getEntityForwardY(entity: EntityIndex): number {
	const getEntityForwardY_result = Citizen.invokeNative<number>('0xD7A7E267DEDA742E', entity);
	return getEntityForwardY_result;
}