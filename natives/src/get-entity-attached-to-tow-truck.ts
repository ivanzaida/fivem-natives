import { EntityIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_ENTITY_ATTACHED_TO_TOW_TRUCK
 *
 * 0x314C37CF34534BCB

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} towTruckVehicle
 * @returns {EntityIndex}  
 */
export function getEntityAttachedToTowTruck(towTruckVehicle: EntityIndex): EntityIndex {
	const getEntityAttachedToTowTruck_result = Citizen.invokeNative<EntityIndex>('0x314C37CF34534BCB', towTruckVehicle);
	return getEntityAttachedToTowTruck_result;
}