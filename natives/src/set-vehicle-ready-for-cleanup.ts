import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_READY_FOR_CLEANUP
 *
 * 0xDB3813D934CC6718

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function setVehicleReadyForCleanup(vehicle: VehicleIndex): void {
	const setVehicleReadyForCleanup_result = Citizen.invokeNative<void>('0xDB3813D934CC6718', vehicle);
	return setVehicleReadyForCleanup_result;
}