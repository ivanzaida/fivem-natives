import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:HAS_ENTITY_BEEN_DAMAGED_BY_ANY_VEHICLE
 *
 * 0xFFF4FB66DA549D0F

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function hasEntityBeenDamagedByAnyVehicle(entity: EntityIndex): boolean {
	const hasEntityBeenDamagedByAnyVehicle_result = Citizen.invokeNative<boolean>('0xFFF4FB66DA549D0F', entity);
	return hasEntityBeenDamagedByAnyVehicle_result;
}