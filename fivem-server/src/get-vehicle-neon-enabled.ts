import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_NEON_ENABLED
 *
 * 0x684BDBF2

 * 
 * indices:
 * 0 = Left
 * 1 = Right
 * 2 = Front
 * 3 = Back
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to check.
 * @param {number} neonIndex A value from the neonIndex enum representing the neon light to check.
 * @returns {boolean}  
 */
export function getVehicleNeonEnabled(vehicle: VehicleIndex, neonIndex: number): boolean {
	const getVehicleNeonEnabled_result = Citizen.invokeNative<boolean>('0x684BDBF2', vehicle, neonIndex);
	return getVehicleNeonEnabled_result;
}