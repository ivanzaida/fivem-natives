import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:CLEAR_VEHICLE_CUSTOM_SECONDARY_COLOUR
 *
 * 0x588D8FDC61F7CFAD

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function clearVehicleCustomSecondaryColour(vehicle: VehicleIndex): void {
	const clearVehicleCustomSecondaryColour_result = Citizen.invokeNative<void>('0x588D8FDC61F7CFAD', vehicle);
	return clearVehicleCustomSecondaryColour_result;
}