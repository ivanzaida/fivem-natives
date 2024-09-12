import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_ALL_VEHICLES
 *
 * 0x0D308D56EF4A935A

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} array
 * @returns {number}  
 */
export function getAllVehicles(array: VehicleIndex): number {
	const getAllVehicles_result = Citizen.invokeNative<number>('0x0D308D56EF4A935A', array);
	return getAllVehicles_result;
}