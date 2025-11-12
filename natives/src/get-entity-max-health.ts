import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_MAX_HEALTH
 *
 * 0xF8A78594664D23A6

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
	const getEntityMaxHealth_result = Citizen.invokeNative<number>('0xF8A78594664D23A6', entity);
	return getEntityMaxHealth_result;
}