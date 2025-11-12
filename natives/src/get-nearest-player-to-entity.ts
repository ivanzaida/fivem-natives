import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_NEAREST_PLAYER_TO_ENTITY
 *
 * 0xBD9259F686649141

 * 
 * Get the closest player to an entity
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {number}  
 */
export function getNearestPlayerToEntity(entity: EntityIndex): number {
	const getNearestPlayerToEntity_result = Citizen.invokeNative<number>('0xBD9259F686649141', entity);
	return getNearestPlayerToEntity_result;
}