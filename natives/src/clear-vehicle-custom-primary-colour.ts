import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:CLEAR_VEHICLE_CUSTOM_PRIMARY_COLOUR
 *
 * 0x963D9A7202C06F65

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function clearVehicleCustomPrimaryColour(vehicle: VehicleIndex): void {
	const clearVehicleCustomPrimaryColour_result = Citizen.invokeNative<void>('0x963D9A7202C06F65', vehicle);
	return clearVehicleCustomPrimaryColour_result;
}