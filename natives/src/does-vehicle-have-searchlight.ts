import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DOES_VEHICLE_HAVE_SEARCHLIGHT
 *
 * 0x8B8BD77BD5CC1D17

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function doesVehicleHaveSearchlight(vehicle: VehicleIndex): boolean {
	const doesVehicleHaveSearchlight_result = Citizen.invokeNative<boolean>('0x8B8BD77BD5CC1D17', vehicle);
	return doesVehicleHaveSearchlight_result;
}