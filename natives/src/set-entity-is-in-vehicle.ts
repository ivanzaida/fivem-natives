import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_IS_IN_VEHICLE
 *
 * 0x1F6D8B404B68A2BC

 * 
 * Indicate that an entity is inside an object, to avoid it being affect by puddles.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function setEntityIsInVehicle(entity: EntityIndex): void {
	const setEntityIsInVehicle_result = Citizen.invokeNative<void>('0x1F6D8B404B68A2BC', entity);
	return setEntityIsInVehicle_result;
}