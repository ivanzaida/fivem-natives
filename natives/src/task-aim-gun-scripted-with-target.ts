import { PedIndex, EScriptedGunTask } from '@ivanzaida/structures'

/**
 * TASK:TASK_AIM_GUN_SCRIPTED_WITH_TARGET
 *
 * 0x948C59076639BD77

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} target
 * @param {number} targetPositionX
 * @param {number} targetPositionY
 * @param {number} targetPositionZ
 * @param {EScriptedGunTask} aimGunTaskType
 * @param {boolean} disableGunBlocking
 * @param {boolean} forceAim
 */
export function taskAimGunScriptedWithTarget(ped: PedIndex, target: PedIndex, targetPositionX: number, targetPositionY: number, targetPositionZ: number, aimGunTaskType: EScriptedGunTask | number = 82190121, disableGunBlocking: boolean = true, forceAim: boolean = false): void {
	const taskAimGunScriptedWithTarget_result = Citizen.invokeNative<void>('0x948C59076639BD77', ped, target, targetPositionX, targetPositionY, targetPositionZ, aimGunTaskType, disableGunBlocking, forceAim);
	return taskAimGunScriptedWithTarget_result;
}