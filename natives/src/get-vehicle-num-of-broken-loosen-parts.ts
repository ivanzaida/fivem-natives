import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_NUM_OF_BROKEN_LOOSEN_PARTS
 *
 * 0xD5AA1C942B6D68DD

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleNumOfBrokenLoosenParts(vehicle: VehicleIndex): number {
	const getVehicleNumOfBrokenLoosenParts_result = Citizen.invokeNative<number>('0xD5AA1C942B6D68DD', vehicle);
	return getVehicleNumOfBrokenLoosenParts_result;
}