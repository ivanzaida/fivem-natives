import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:STOP_BRINGING_VEHICLE_TO_HALT
 *
 * 0xF5B09CD26D48D446

 * 
 * Stops CTaskBringVehicleToHalt
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function stopBringingVehicleToHalt(vehicle: VehicleIndex): void {
	const stopBringingVehicleToHalt_result = Citizen.invokeNative<void>('0xF5B09CD26D48D446', vehicle);
	return stopBringingVehicleToHalt_result;
}