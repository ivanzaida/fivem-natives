import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_DIRT_LEVEL
 *
 * 0xF04E476AE02C4646

 * 
 * Dirt level does not become greater than 15.0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleDirtLevel(vehicle: VehicleIndex): number {
	const getVehicleDirtLevel_result = Citizen.invokeNative<number>('0xF04E476AE02C4646', vehicle);
	return getVehicleDirtLevel_result;
}