import { PedIndex, VehicleIndex, EVehicleSeat } from '@ivanzaida/structures'

/**
 * TASK:TASK_OPEN_VEHICLE_DOOR
 *
 * 0xFECF11FFA163942B

 * 
 * The given ped will try to open the nearest door to 'seat'.
 * Example: telling the ped to open the door for the driver seat does not necessarily mean it will open the driver door, it may choose to open the passenger door instead if that one is closer.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {number} time 1 the ped will never warp to the vehicle.
 * @param {EVehicleSeat} seat
 * @param {number} moveBlendRatio
 */
export function taskOpenVehicleDoor(ped: PedIndex, vehicle: VehicleIndex, time: number = 20000, seat: EVehicleSeat | number = 1, moveBlendRatio: number = 2): void {
	const taskOpenVehicleDoor_result = Citizen.invokeNative<void>('0xFECF11FFA163942B', ped, vehicle, time, seat, moveBlendRatio);
	return taskOpenVehicleDoor_result;
}