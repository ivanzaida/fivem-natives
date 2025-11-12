import { PedIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:TASK_ENTER_VEHICLE
 *
 * 0xB8689B4E

 * 
 * speed 1.0 = walk, 2.0 = run
 * p5 1 = normal, 3 = teleport to vehicle, 16 = teleport directly into vehicle
 * p6 is always 0
 * 
 * Usage of seat
 * -1 = driver
 * 0 = passenger
 * 1 = left back seat
 * 2 = right back seat
 * 3 = outside left
 * 4 = outside right
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {number} timeout
 * @param {number} seatIndex See eSeatPosition declared in [IS_VEHICLE_SEAT_FREE](\_0x22AC59A870E6A669).
 * @param {number} speed
 * @param {number} flag
 * @param {any} p6
 */
export function taskEnterVehicle(ped: PedIndex, vehicle: VehicleIndex, timeout: number, seatIndex: number, speed: number, flag: number, p6: any): void {
	const taskEnterVehicle_result = Citizen.invokeNative<void>('0xB8689B4E', ped, vehicle, timeout, seatIndex, speed, flag, p6);
	return taskEnterVehicle_result;
}