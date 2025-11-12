import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:REMOVE_VEHICLE_HIGH_DETAIL_MODEL
 *
 * 0x25F4808C787100D3

 * 
 * Used primarily for cut scenes
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function removeVehicleHighDetailModel(vehicle: VehicleIndex): void {
	const removeVehicleHighDetailModel_result = Citizen.invokeNative<void>('0x25F4808C787100D3', vehicle);
	return removeVehicleHighDetailModel_result;
}