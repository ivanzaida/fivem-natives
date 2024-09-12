import { PedIndex, EEnterExitVehicleFlags } from '@ivanzaida/structures'

/**
 * CFX:TASK_LEAVE_ANY_VEHICLE
 *
 * 0xDBDD79FA

 * Flags are the same flags used in TASK_LEAVE_VEHICLE
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} delayTime
 * @param {EEnterExitVehicleFlags} flags
 */
export function taskLeaveAnyVehicle(ped: PedIndex, delayTime: number = 0, flags: EEnterExitVehicleFlags | number = 0): void {
	const taskLeaveAnyVehicle_result = Citizen.invokeNative<void>('0xDBDD79FA', ped, delayTime, flags);
	return taskLeaveAnyVehicle_result;
}