import { PedIndex, ETaskHandsUpFlags } from '@ivanzaida/structures'

/**
 * CFX:TASK_HANDS_UP
 *
 * 0X8DCC19C5

 * In the scripts, p3 was always -1.
 * p3 seems to be duration or timeout of turn animation.
 * Also facingPed can be 0 or -1 so ped will just raise hands up.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} time
 * @param {PedIndex} pedToFace
 * @param {number} timeToFacePed
 * @param {ETaskHandsUpFlags} flags
 */
export function taskHandsUp(ped: PedIndex, time: number, pedToFace: PedIndex = null!, timeToFacePed: number = 1, flags: ETaskHandsUpFlags | number = 0): void {
	const taskHandsUp_result = Citizen.invokeNative<void>('0X8DCC19C5', ped, time, pedToFace, timeToFacePed, flags);
	return taskHandsUp_result;
}