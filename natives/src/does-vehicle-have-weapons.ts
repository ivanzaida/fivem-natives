import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DOES_VEHICLE_HAVE_WEAPONS
 *
 * 0x3665875382B5AB69

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function doesVehicleHaveWeapons(vehicle: VehicleIndex): boolean {
	const doesVehicleHaveWeapons_result = Citizen.invokeNative<boolean>('0x3665875382B5AB69', vehicle);
	return doesVehicleHaveWeapons_result;
}