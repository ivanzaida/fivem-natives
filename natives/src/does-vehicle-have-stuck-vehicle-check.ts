import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DOES_VEHICLE_HAVE_STUCK_VEHICLE_CHECK
 *
 * 0x67AC1AE8A2697D67

 * 
 * Maximum amount of vehicles with vehicle stuck check appears to be 16.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function doesVehicleHaveStuckVehicleCheck(vehicle: VehicleIndex): boolean {
	const doesVehicleHaveStuckVehicleCheck_result = Citizen.invokeNative<boolean>('0x67AC1AE8A2697D67', vehicle);
	return doesVehicleHaveStuckVehicleCheck_result;
}