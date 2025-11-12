import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_IN_SUBMARINE_MODE
 *
 * 0x17556069075B5519

 * 
 * Checks to see if the vehicle is in submarine mode
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleInSubmarineMode(vehicle: VehicleIndex): boolean {
	const isVehicleInSubmarineMode_result = Citizen.invokeNative<boolean>('0x17556069075B5519', vehicle);
	return isVehicleInSubmarineMode_result;
}