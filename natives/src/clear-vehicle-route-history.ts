import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:CLEAR_VEHICLE_ROUTE_HISTORY
 *
 * 0xD2B08CD9D81655CE

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function clearVehicleRouteHistory(vehicle: VehicleIndex): void {
	const clearVehicleRouteHistory_result = Citizen.invokeNative<void>('0xD2B08CD9D81655CE', vehicle);
	return clearVehicleRouteHistory_result;
}