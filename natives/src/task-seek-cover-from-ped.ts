import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_SEEK_COVER_FROM_PED
 *
 * 0x3D948B91131AF671

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} otherPed
 * @param {number} time
 * @param {boolean} canPeekAndAim
 */
export function taskSeekCoverFromPed(ped: PedIndex, otherPed: PedIndex, time: number, canPeekAndAim: boolean = false): void {
	const taskSeekCoverFromPed_result = Citizen.invokeNative<void>('0x3D948B91131AF671', ped, otherPed, time, canPeekAndAim);
	return taskSeekCoverFromPed_result;
}