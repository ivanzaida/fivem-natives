import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_HAS_LANDING_GEAR
 *
 * 0x8EC15ED9ECD1E9D0

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getVehicleHasLandingGear(vehicle: VehicleIndex): boolean {
	const getVehicleHasLandingGear_result = Citizen.invokeNative<boolean>('0x8EC15ED9ECD1E9D0', vehicle);
	return getVehicleHasLandingGear_result;
}