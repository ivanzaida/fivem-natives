import { VehicleIndex, EVehicleSeat } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_SEAT_FREE
 *
 * 0xC39AE5D390581AD5

 * 
 * Check if a vehicle seat is free.
 * 
 * seatIndex  = -1 being the driver seat.
 * Use GET_VEHICLE_MAX_NUMBER_OF_PASSENGERS(vehicle) - 1 for last seat index.
 * isTaskRunning = on true the function returns already false while a task on the target seat is running (TASK_ENTER_VEHICLE/TASK_SHUFFLE_TO_NEXT_VEHICLE_SEAT) - on false only when a ped is finally sitting in the seat.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EVehicleSeat} seat
 * @param {boolean} considerPedUsingSeat
 * @returns {boolean}  
 */
export function isVehicleSeatFree(vehicle: VehicleIndex, seat: EVehicleSeat | number = 1, considerPedUsingSeat: boolean = false): boolean {
	const isVehicleSeatFree_result = Citizen.invokeNative<boolean>('0xC39AE5D390581AD5', vehicle, seat, considerPedUsingSeat);
	return isVehicleSeatFree_result;
}