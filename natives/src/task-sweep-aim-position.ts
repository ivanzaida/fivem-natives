import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_SWEEP_AIM_POSITION
 *
 * 0xE7D618671D65A1FF

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} animDictName
 * @param {string} lowAnimName
 * @param {string} medAnimName
 * @param {string} hiAnimName
 * @param {number} runTime
 * @param {number} scrVecCoorsX
 * @param {number} scrVecCoorsY
 * @param {number} scrVecCoorsZ
 * @param {number} turnRate
 * @param {number} blendInDuration
 */
export function taskSweepAimPosition(ped: PedIndex, animDictName: string, lowAnimName: string, medAnimName: string, hiAnimName: string, runTime: number, scrVecCoorsX: number, scrVecCoorsY: number, scrVecCoorsZ: number, turnRate: number = 1.57, blendInDuration: number = 0.25): void {
	const taskSweepAimPosition_result = Citizen.invokeNative<void>('0xE7D618671D65A1FF', ped, animDictName, lowAnimName, medAnimName, hiAnimName, runTime, scrVecCoorsX, scrVecCoorsY, scrVecCoorsZ, turnRate, blendInDuration);
	return taskSweepAimPosition_result;
}