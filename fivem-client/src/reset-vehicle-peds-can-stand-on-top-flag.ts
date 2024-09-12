import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:RESET_VEHICLE_PEDS_CAN_STAND_ON_TOP_FLAG
 *
 * 0XDF62CFE2

 * Resets whether or not peds can stand on top of the specified vehicle.Note this flag is not replicated automatically, you will have to manually do so.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle.
 */
export function resetVehiclePedsCanStandOnTopFlag(vehicle: VehicleIndex): void {
	const resetVehiclePedsCanStandOnTopFlag_result = Citizen.invokeNative<void>('0XDF62CFE2', vehicle);
	return resetVehiclePedsCanStandOnTopFlag_result;
}