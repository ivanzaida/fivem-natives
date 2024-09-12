import { EScriptedGunTask } from '@ivanzaida/structures'

/**
 * TASK:GET_CLIP_SET_FOR_SCRIPTED_GUN_TASK
 *
 * 0x71929CB75E82CF02

 * 
 * ------------------------------------------------------------------
 * @param {EScriptedGunTask} aimGunTaskType
 * @returns {string}  
 */
export function getClipSetForScriptedGunTask(aimGunTaskType: EScriptedGunTask | number = 82190121): string {
	const getClipSetForScriptedGunTask_result = Citizen.invokeNative<string>('0x71929CB75E82CF02', aimGunTaskType);
	return getClipSetForScriptedGunTask_result;
}