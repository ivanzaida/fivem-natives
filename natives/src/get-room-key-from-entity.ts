import { EntityIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:GET_ROOM_KEY_FROM_ENTITY
 *
 * 0xAB74A6FE5E16479E

 * 
 * Gets the room hash key from the room that the specified entity is in. Each room in every interior has a unique key. Returns 0 if the entity is outside.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {number}  
 */
export function getRoomKeyFromEntity(entity: EntityIndex): number {
	const getRoomKeyFromEntity_result = Citizen.invokeNative<number>('0xAB74A6FE5E16479E', entity);
	return getRoomKeyFromEntity_result;
}