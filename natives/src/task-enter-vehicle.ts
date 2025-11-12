import { PedIndex, VehicleIndex, EVehicleSeat, EEnterExitVehicleFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_ENTER_VEHICLE
 *
 * 0xEBA229B2E0BB05E0

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
 * @param {number} time 1 the ped will never warp into the vehicle.
 * @param {EVehicleSeat} seat
 * @param {number} moveBlendRatio
 * @param {EEnterExitVehicleFlags} flags
 * @param {string} overridenClipSet
 */
export function taskEnterVehicle(ped: PedIndex, vehicle: VehicleIndex, time: number = 20000, seat: EVehicleSeat | number = 1, moveBlendRatio: number = 2, flags: EEnterExitVehicleFlags | number = 1, overridenClipSet: string = null!): void {
	const taskEnterVehicle_result = Citizen.invokeNative<void>('0xEBA229B2E0BB05E0', ped, vehicle, time, seat, moveBlendRatio, flags, overridenClipSet);
	return taskEnterVehicle_result;
}