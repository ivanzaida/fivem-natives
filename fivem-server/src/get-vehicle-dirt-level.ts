import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_DIRT_LEVEL
 *
 * 0xFD15C065

 * 
 * Dirt level does not become greater than 15.0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleDirtLevel(vehicle: VehicleIndex): number {
	const getVehicleDirtLevel_result = Citizen.invokeNative<number>('0xFD15C065', vehicle);
	return getVehicleDirtLevel_result;
}