import { PedIndex, VehicleIndex, EVehicleSeat } from '@ivanzaida/structures'

/**
 * CFX:TASK_WARP_PED_INTO_VEHICLE
 *
 * 0X65D4A35D

 * Seat Numbers
 * -------------------------------
 * Driver = -1
 * Any = -2
 * Left-Rear = 1
 * Right-Front = 0
 * Right-Rear = 2
 * Extra seats = 3-14(This may differ from vehicle type e.g. Firetruck Rear Stand, Ambulance Rear)
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {EVehicleSeat} seat
 */
export function taskWarpPedIntoVehicle(ped: PedIndex, vehicle: VehicleIndex, seat: EVehicleSeat | number = 1): void {
	const taskWarpPedIntoVehicle_result = Citizen.invokeNative<void>('0X65D4A35D', ped, vehicle, seat);
	return taskWarpPedIntoVehicle_result;
}