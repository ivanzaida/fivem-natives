import { PedIndex, EStealthKillTaskFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_STEALTH_KILL
 *
 * 0x29EE4DD912B2F524

 * 
 * known "killTypes" are: "AR_stealth_kill_knife" and "AR_stealth_kill_a".
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} targetPed
 * @param {number} stealthKillActionResultId
 * @param {number} desiredMoveBlendRatio
 * @param {EStealthKillTaskFlags} flags
 */
export function taskStealthKill(ped: PedIndex, targetPed: PedIndex, stealthKillActionResultId: number, desiredMoveBlendRatio: number = 1, flags: EStealthKillTaskFlags | number = 0): void {
	const taskStealthKill_result = Citizen.invokeNative<void>('0x29EE4DD912B2F524', ped, targetPed, stealthKillActionResultId, desiredMoveBlendRatio, flags);
	return taskStealthKill_result;
}