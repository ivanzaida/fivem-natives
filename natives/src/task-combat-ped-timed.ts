import { PedIndex, ETaskCombatPedFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_COMBAT_PED_TIMED
 *
 * 0xC22FB64C71A7CD89

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} otherPed
 * @param {number} time
 * @param {ETaskCombatPedFlags} flags
 */
export function taskCombatPedTimed(ped: PedIndex, otherPed: PedIndex, time: number, flags: ETaskCombatPedFlags | number = 0): void {
	const taskCombatPedTimed_result = Citizen.invokeNative<void>('0xC22FB64C71A7CD89', ped, otherPed, time, flags);
	return taskCombatPedTimed_result;
}