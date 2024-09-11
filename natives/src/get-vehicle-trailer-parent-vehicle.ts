import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:_GET_VEHICLE_TRAILER_PARENT_VEHICLE
 *
 * 0x5FC7CC4DB8966A85

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} trailer
 * @returns {VehicleIndex}  
 */
export function getVehicleTrailerParentVehicle(trailer: VehicleIndex): VehicleIndex {
	const getVehicleTrailerParentVehicle_result = Citizen.invokeNative<VehicleIndex>('0x5FC7CC4DB8966A85', trailer);
	return getVehicleTrailerParentVehicle_result;
}