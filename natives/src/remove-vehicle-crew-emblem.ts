import { VehicleIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:REMOVE_VEHICLE_CREW_EMBLEM
 *
 * 0x5429B2C176877208

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} badge
 */
export function removeVehicleCrewEmblem(vehicle: VehicleIndex, badge: number = 0): void {
	const removeVehicleCrewEmblem_result = Citizen.invokeNative<void>('0x5429B2C176877208', vehicle, badge);
	return removeVehicleCrewEmblem_result;
}