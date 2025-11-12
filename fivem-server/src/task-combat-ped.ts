import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:TASK_COMBAT_PED
 *
 * 0xCB0D8932

 * 
 * Makes the specified ped attack the target ped.
 * p2 should be 0
 * p3 should be 16
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} targetPed
 * @param {number} p2
 * @param {number} p3
 */
export function taskCombatPed(ped: PedIndex, targetPed: PedIndex, p2: number, p3: number): void {
	const taskCombatPed_result = Citizen.invokeNative<void>('0xCB0D8932', ped, targetPed, p2, p3);
	return taskCombatPed_result;
}