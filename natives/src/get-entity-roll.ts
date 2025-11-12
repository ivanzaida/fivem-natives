import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_ROLL
 *
 * 0x5E674CD80769B53A

 * 
 * Displays the current ROLL axis of the entity [-180.0000/180.0000+]
 * (Sideways Roll) such as a vehicle tipped on its side
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {number}  
 */
export function getEntityRoll(entity: EntityIndex): number {
	const getEntityRoll_result = Citizen.invokeNative<number>('0x5E674CD80769B53A', entity);
	return getEntityRoll_result;
}