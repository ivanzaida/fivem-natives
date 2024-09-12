import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_USE_ALTERNATE_HANDLING
 *
 * 0x6E97FD533F10FC5C

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} useAlternateHandling
 */
export function setVehicleUseAlternateHandling(vehicle: VehicleIndex, useAlternateHandling: boolean): void {
	const setVehicleUseAlternateHandling_result = Citizen.invokeNative<void>('0x6E97FD533F10FC5C', vehicle, useAlternateHandling);
	return setVehicleUseAlternateHandling_result;
}