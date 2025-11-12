import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:TASK_HANDS_UP
 *
 * 0x8DCC19C5

 * 
 * In the scripts, p3 was always -1.
 * 
 * p3 seems to be duration or timeout of turn animation.
 * Also facingPed can be 0 or -1 so ped will just raise hands up.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} duration
 * @param {PedIndex} facingPed
 * @param {number} p3
 * @param {boolean} p4
 */
export function taskHandsUp(ped: PedIndex, duration: number, facingPed: PedIndex, p3: number, p4: boolean): void {
	const taskHandsUp_result = Citizen.invokeNative<void>('0x8DCC19C5', ped, duration, facingPed, p3, p4);
	return taskHandsUp_result;
}