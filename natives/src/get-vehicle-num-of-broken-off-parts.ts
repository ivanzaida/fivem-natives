import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_NUM_OF_BROKEN_OFF_PARTS
 *
 * 0x4FD9D8C197FF8A52

 * 
 * Also includes some "turnOffBones" when vehicle mods are installed.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleNumOfBrokenOffParts(vehicle: VehicleIndex): number {
	const getVehicleNumOfBrokenOffParts_result = Citizen.invokeNative<number>('0x4FD9D8C197FF8A52', vehicle);
	return getVehicleNumOfBrokenOffParts_result;
}