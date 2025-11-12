import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:REQUEST_VEHICLE_HIGH_DETAIL_MODEL
 *
 * 0x53152C1272227778

 * 
 * Used primarily for cut scenes
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function requestVehicleHighDetailModel(vehicle: VehicleIndex): void {
	const requestVehicleHighDetailModel_result = Citizen.invokeNative<void>('0x53152C1272227778', vehicle);
	return requestVehicleHighDetailModel_result;
}