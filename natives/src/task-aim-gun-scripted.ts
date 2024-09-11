import { PedIndex, EScriptedGunTask } from '@ivanzaida/structures'

/**
 * TASK:TASK_AIM_GUN_SCRIPTED
 *
 * 0x67F37AE193B6C0E0

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EScriptedGunTask} aimGunTaskType
 * @param {boolean} disableGunBlocking
 * @param {boolean} instantBlendToAim
 */
export function taskAimGunScripted(ped: PedIndex, aimGunTaskType: EScriptedGunTask | number = 82190121, disableGunBlocking: boolean = true, instantBlendToAim: boolean = false): void {
	const taskAimGunScripted_result = Citizen.invokeNative<void>('0x67F37AE193B6C0E0', ped, aimGunTaskType, disableGunBlocking, instantBlendToAim);
	return taskAimGunScripted_result;
}