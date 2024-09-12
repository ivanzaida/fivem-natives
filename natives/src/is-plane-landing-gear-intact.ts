import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_PLANE_LANDING_GEAR_INTACT
 *
 * 0x61F41693A4648B46

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isPlaneLandingGearIntact(vehicle: VehicleIndex): boolean {
	const isPlaneLandingGearIntact_result = Citizen.invokeNative<boolean>('0x61F41693A4648B46', vehicle);
	return isPlaneLandingGearIntact_result;
}