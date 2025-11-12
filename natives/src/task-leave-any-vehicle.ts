import { PedIndex, EEnterExitVehicleFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_LEAVE_ANY_VEHICLE
 *
 * 0x092B9247AF00F5CF

 * 
 * Flags are the same flags used in TASK_LEAVE_VEHICLE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} delayTime
 * @param {EEnterExitVehicleFlags} flags
 */
export function taskLeaveAnyVehicle(ped: PedIndex, delayTime: number = 0, flags: EEnterExitVehicleFlags | number = 0): void {
	const taskLeaveAnyVehicle_result = Citizen.invokeNative<void>('0x092B9247AF00F5CF', ped, delayTime, flags);
	return taskLeaveAnyVehicle_result;
}