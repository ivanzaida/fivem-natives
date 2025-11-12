import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_IN_WATER
 *
 * 0x69799E0840A34AFB

 * 
 * Returns TRUE if the entity is in water
 * If the entity is a ped in a vehicle, then the vehicle is also checked.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityInWater(entity: EntityIndex): boolean {
	const isEntityInWater_result = Citizen.invokeNative<boolean>('0x69799E0840A34AFB', entity);
	return isEntityInWater_result;
}