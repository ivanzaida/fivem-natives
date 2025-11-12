import { PedIndex, ETaskCombatPedFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_COMBAT_HATED_TARGETS_IN_AREA
 *
 * 0x6D81908BD7709ABC

 * 
 * Despite its name, it only attacks ONE hated target. The one closest to the specified position.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {number} range
 * @param {ETaskCombatPedFlags} flags
 */
export function taskCombatHatedTargetsInArea(ped: PedIndex, positionX: number, positionY: number, positionZ: number, range: number, flags: ETaskCombatPedFlags | number = 0): void {
	const taskCombatHatedTargetsInArea_result = Citizen.invokeNative<void>('0x6D81908BD7709ABC', ped, positionX, positionY, positionZ, range, flags);
	return taskCombatHatedTargetsInArea_result;
}