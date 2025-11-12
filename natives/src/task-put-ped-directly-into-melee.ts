import { PedIndex, ETaskCombatPedFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_PUT_PED_DIRECTLY_INTO_MELEE
 *
 * 0x849ABF0CBD8EE0D6

 * 
 * from armenian3.c4
 * 
 * TASK::TASK_PUT_PED_DIRECTLY_INTO_MELEE(PlayerPed, armenianPed, 0.0, -1.0, 0.0, 0);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} pedTarget
 * @param {number} blendInDuration
 * @param {number} timeInTask
 * @param {number} strafePhaseSync
 * @param {ETaskCombatPedFlags} aiCombatFlags Only applies when the ped being given the task is an AI ped
 */
export function taskPutPedDirectlyIntoMelee(ped: PedIndex, pedTarget: PedIndex, blendInDuration: number, timeInTask: number, strafePhaseSync: number, aiCombatFlags: ETaskCombatPedFlags | number = 0): void {
	const taskPutPedDirectlyIntoMelee_result = Citizen.invokeNative<void>('0x849ABF0CBD8EE0D6', ped, pedTarget, blendInDuration, timeInTask, strafePhaseSync, aiCombatFlags);
	return taskPutPedDirectlyIntoMelee_result;
}