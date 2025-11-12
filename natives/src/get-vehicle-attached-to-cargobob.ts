import { VehicleIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_ATTACHED_TO_CARGOBOB
 *
 * 0x79FCDCFB75A2E31B

 * 
 * Returns attached vehicle (Vehicle in parameter must be cargobob)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @returns {EntityIndex}  
 */
export function getVehicleAttachedToCargobob(cargobob: VehicleIndex): EntityIndex {
	const getVehicleAttachedToCargobob_result = Citizen.invokeNative<EntityIndex>('0x79FCDCFB75A2E31B', cargobob);
	return getVehicleAttachedToCargobob_result;
}