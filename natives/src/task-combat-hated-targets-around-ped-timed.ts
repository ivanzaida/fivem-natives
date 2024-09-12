import { PedIndex, ETaskCombatPedFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_COMBAT_HATED_TARGETS_AROUND_PED_TIMED
 *
 * 0x1D006DA9CB2B79B2

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} range
 * @param {number} time
 * @param {ETaskCombatPedFlags} flags
 */
export function taskCombatHatedTargetsAroundPedTimed(ped: PedIndex, range: number, time: number, flags: ETaskCombatPedFlags | number = 0): void {
	const taskCombatHatedTargetsAroundPedTimed_result = Citizen.invokeNative<void>('0x1D006DA9CB2B79B2', ped, range, time, flags);
	return taskCombatHatedTargetsAroundPedTimed_result;
}