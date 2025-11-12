import { PedIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:TASK_WARP_PED_INTO_VEHICLE
 *
 * 0x65D4A35D

 * 
 * Seat Numbers
 * -------------------------------
 * Driver = -1
 * Any = -2
 * Left-Rear = 1
 * Right-Front = 0
 * Right-Rear = 2
 * Extra seats = 3-14(This may differ from vehicle type e.g. Firetruck Rear Stand, Ambulance Rear)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The Ped to be warped into the vehicle.
 * @param {VehicleIndex} vehicle The target vehicle into which the ped will be warped.
 * @param {number} seatIndex See eSeatPosition declared in [IS_VEHICLE_SEAT_FREE](\_0x22AC59A870E6A669).
 */
export function taskWarpPedIntoVehicle(ped: PedIndex, vehicle: VehicleIndex, seatIndex: number): void {
	const taskWarpPedIntoVehicle_result = Citizen.invokeNative<void>('0x65D4A35D', ped, vehicle, seatIndex);
	return taskWarpPedIntoVehicle_result;
}