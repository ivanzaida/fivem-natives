import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_AI_CAN_USE_EXCLUSIVE_SEATS
 *
 * 0x863A048DC4DBB2FE

 * 
 * Used to be incorrectly named SET_VEHICLE_EXCLUSIVE_DRIVER
 * Toggles a flag related to SET_VEHICLE_EXCLUSIVE_DRIVER, however, doesn't enable that feature (or trigger script events related to it).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} canUse
 */
export function setVehicleAiCanUseExclusiveSeats(vehicle: VehicleIndex, canUse: boolean): void {
	const setVehicleAiCanUseExclusiveSeats_result = Citizen.invokeNative<void>('0x863A048DC4DBB2FE', vehicle, canUse);
	return setVehicleAiCanUseExclusiveSeats_result;
}