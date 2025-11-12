import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_ENTITY_MAX_HEALTH
 *
 * 0xC7AE6AA1

 * 
 * Return an integer value of entity's maximum health.
 * 
 * Example:
 * - Player = 200
 * - Ped = 150
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {number}  
 */
export function getEntityMaxHealth(entity: EntityIndex): number {
	const getEntityMaxHealth_result = Citizen.invokeNative<number>('0xC7AE6AA1', entity);
	return getEntityMaxHealth_result;
}