import { EntityIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_VEHICLE_INDEX_FROM_ENTITY_INDEX
 *
 * 0xE93EDE86BBB66532

 * 
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {VehicleIndex}  
 */
export function getVehicleIndexFromEntityIndex(entity: EntityIndex): VehicleIndex {
	const getVehicleIndexFromEntityIndex_result = Citizen.invokeNative<VehicleIndex>('0xE93EDE86BBB66532', entity);
	return getVehicleIndexFromEntityIndex_result;
}