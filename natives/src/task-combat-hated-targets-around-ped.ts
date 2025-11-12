import { PedIndex, ETaskCombatPedFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_COMBAT_HATED_TARGETS_AROUND_PED
 *
 * 0xF6CC23160DD0AAED

 * 
 * Despite its name, it only attacks ONE hated target. The one closest hated target.
 * 
 * p2 seems to be always 0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} range
 * @param {ETaskCombatPedFlags} flags
 */
export function taskCombatHatedTargetsAroundPed(ped: PedIndex, range: number, flags: ETaskCombatPedFlags | number = 0): void {
	const taskCombatHatedTargetsAroundPed_result = Citizen.invokeNative<void>('0xF6CC23160DD0AAED', ped, range, flags);
	return taskCombatHatedTargetsAroundPed_result;
}