import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_ENTITY_HEALTH
 *
 * 0x8E3222B7

 * 
 * Returns an integer value of entity's current health.
 * 
 * Example of range for ped:
 * - Player [0 to 200]
 * - Ped [100 to 200]
 * - Vehicle [0 to 1000]
 * - Object [0 to 1000]
 * 
 * Health is actually a float value but this native casts it to int.
 * In order to get the actual value, do:
 * float health = (float )(entityAddress + 0x280);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity The entity to check the health of
 * @returns {number}  
 */
export function getEntityHealth(entity: EntityIndex): number {
	const getEntityHealth_result = Citizen.invokeNative<number>('0x8E3222B7', entity);
	return getEntityHealth_result;
}