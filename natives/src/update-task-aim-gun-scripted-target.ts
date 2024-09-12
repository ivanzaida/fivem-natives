import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:UPDATE_TASK_AIM_GUN_SCRIPTED_TARGET
 *
 * 0x287D43AF8CDBA667

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} target
 * @param {number} targetPositionX
 * @param {number} targetPositionY
 * @param {number} targetPositionZ
 * @param {boolean} disableGunBlocking
 */
export function updateTaskAimGunScriptedTarget(ped: PedIndex, target: PedIndex, targetPositionX: number, targetPositionY: number, targetPositionZ: number, disableGunBlocking: boolean = true): void {
	const updateTaskAimGunScriptedTarget_result = Citizen.invokeNative<void>('0x287D43AF8CDBA667', ped, target, targetPositionX, targetPositionY, targetPositionZ, disableGunBlocking);
	return updateTaskAimGunScriptedTarget_result;
}