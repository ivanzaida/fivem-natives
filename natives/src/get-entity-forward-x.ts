import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_FORWARD_X
 *
 * 0xE4833C1EFC5928A6

 * 
 * Gets the X-component of the entity's forward vector.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {number}  
 */
export function getEntityForwardX(entity: EntityIndex): number {
	const getEntityForwardX_result = Citizen.invokeNative<number>('0xE4833C1EFC5928A6', entity);
	return getEntityForwardX_result;
}