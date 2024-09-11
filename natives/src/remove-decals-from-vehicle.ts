import { VehicleIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:REMOVE_DECALS_FROM_VEHICLE
 *
 * 0xFEC8EAE457274AD3

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function removeDecalsFromVehicle(vehicle: VehicleIndex): void {
	const removeDecalsFromVehicle_result = Citizen.invokeNative<void>('0xFEC8EAE457274AD3', vehicle);
	return removeDecalsFromVehicle_result;
}