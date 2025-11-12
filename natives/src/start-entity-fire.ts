import { EntityIndex, FireIndex } from '@ivanzaida/structures'

/**
 * FIRE:START_ENTITY_FIRE
 *
 * 0x604C09F6A880730D

 * 
 * The char that the fire is created on must not be flame proof otherwise the game will assert.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {FireIndex}  
 */
export function startEntityFire(entity: EntityIndex): FireIndex {
	const startEntityFire_result = Citizen.invokeNative<FireIndex>('0x604C09F6A880730D', entity);
	return startEntityFire_result;
}