import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:TASK_LEAVE_ANY_VEHICLE
 *
 * 0xDBDD79FA

 * 
 * Flags are the same flags used in TASK_LEAVE_VEHICLE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} p1
 * @param {number} flags
 */
export function taskLeaveAnyVehicle(ped: PedIndex, p1: number, flags: number): void {
	const taskLeaveAnyVehicle_result = Citizen.invokeNative<void>('0xDBDD79FA', ped, p1, flags);
	return taskLeaveAnyVehicle_result;
}