import { VehicleIndex, ENeonId } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_NEON_ENABLED
 *
 * 0xF1B79038130E3C08

 * 
 * indices:
 * 0 = Left
 * 1 = Right
 * 2 = Front
 * 3 = Back
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {ENeonId} neon
 * @returns {boolean}  
 */
export function getVehicleNeonEnabled(vehicle: VehicleIndex, neon: ENeonId | number): boolean {
	const getVehicleNeonEnabled_result = Citizen.invokeNative<boolean>('0xF1B79038130E3C08', vehicle, neon);
	return getVehicleNeonEnabled_result;
}