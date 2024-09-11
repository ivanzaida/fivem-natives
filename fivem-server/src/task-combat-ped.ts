import { PedIndex, ETaskCombatPedFlags, ETaskThreatResponseFlags } from '@ivanzaida/structures'

/**
 * CFX:TASK_COMBAT_PED
 *
 * 0XCB0D8932

 * Makes the specified ped attack the target ped.
 * p2 should be 0
 * p3 should be 16
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} otherPed
 * @param {ETaskCombatPedFlags} combatFlags
 * @param {ETaskThreatResponseFlags} taskThreatResponseFlags
 */
export function taskCombatPed(ped: PedIndex, otherPed: PedIndex, combatFlags: ETaskCombatPedFlags | number = 0, taskThreatResponseFlags: ETaskThreatResponseFlags | number = 16): void {
	const taskCombatPed_result = Citizen.invokeNative<void>('0XCB0D8932', ped, otherPed, combatFlags, taskThreatResponseFlags);
	return taskCombatPed_result;
}