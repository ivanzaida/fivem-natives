import { EntityIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:GET_KEY_FOR_ENTITY_IN_ROOM
 *
 * 0xC69E0125145BB58A

 * 
 * Seems to do the exact same as INTERIOR::GET_ROOM_KEY_FROM_ENTITY
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {number}  
 */
export function getKeyForEntityInRoom(entity: EntityIndex): number {
	const getKeyForEntityInRoom_result = Citizen.invokeNative<number>('0xC69E0125145BB58A', entity);
	return getKeyForEntityInRoom_result;
}