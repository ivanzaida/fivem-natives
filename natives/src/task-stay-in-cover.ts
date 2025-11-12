import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_STAY_IN_COVER
 *
 * 0x115CA3B4F950226D

 * 
 * This task will cause the ped to continuously look for cover within their defensive area, the defensive area can be moved
 * and the ped will move to within the new area.
 * If the defensive area has a direction the ped will always seek cover from that direction.
 * This can only be called on a ped which has a valid defensive area.
 * 
 * Makes the ped run to take cover
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function taskStayInCover(ped: PedIndex): void {
	const taskStayInCover_result = Citizen.invokeNative<void>('0x115CA3B4F950226D', ped);
	return taskStayInCover_result;
}