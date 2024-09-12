import { VehicleIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:DOES_VEHICLE_HAVE_CREW_EMBLEM
 *
 * 0x0BCE48C8677F9824

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} badge
 * @returns {boolean}  
 */
export function doesVehicleHaveCrewEmblem(vehicle: VehicleIndex, badge: number = 0): boolean {
	const doesVehicleHaveCrewEmblem_result = Citizen.invokeNative<boolean>('0x0BCE48C8677F9824', vehicle, badge);
	return doesVehicleHaveCrewEmblem_result;
}