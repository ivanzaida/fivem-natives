import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_A_VEHICLE
 *
 * 0x55B80B6E7AB61270

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityAVehicle(entity: EntityIndex): boolean {
	const isEntityAVehicle_result = Citizen.invokeNative<boolean>('0x55B80B6E7AB61270', entity);
	return isEntityAVehicle_result;
}