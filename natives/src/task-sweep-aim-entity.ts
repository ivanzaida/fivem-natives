import { PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_SWEEP_AIM_ENTITY
 *
 * 0x15F4AEC8F54F37B9

 * 
 * This function is called on peds in vehicles.
 * 
 * anim: animation name
 * p2, p3, p4: "sweep_low", "sweep_med" or "sweep_high"
 * p5: no idea what it does but is usually -1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} animDictName
 * @param {string} lowAnimName
 * @param {string} medAnimName
 * @param {string} hiAnimName
 * @param {number} runTime
 * @param {EntityIndex} targetEntity
 * @param {number} turnRate
 * @param {number} blendInDuration
 */
export function taskSweepAimEntity(ped: PedIndex, animDictName: string, lowAnimName: string, medAnimName: string, hiAnimName: string, runTime: number, targetEntity: EntityIndex, turnRate: number = 1.57, blendInDuration: number = 0.25): void {
	const taskSweepAimEntity_result = Citizen.invokeNative<void>('0x15F4AEC8F54F37B9', ped, animDictName, lowAnimName, medAnimName, hiAnimName, runTime, targetEntity, turnRate, blendInDuration);
	return taskSweepAimEntity_result;
}