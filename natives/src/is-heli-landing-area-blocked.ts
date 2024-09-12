import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_HELI_LANDING_AREA_BLOCKED
 *
 * 0xB1A8644CC087A079

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isHeliLandingAreaBlocked(vehicle: VehicleIndex): boolean {
	const isHeliLandingAreaBlocked_result = Citizen.invokeNative<boolean>('0xB1A8644CC087A079', vehicle);
	return isHeliLandingAreaBlocked_result;
}