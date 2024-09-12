import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:UPDATE_TASK_SWEEP_AIM_POSITION
 *
 * 0xBDCCE8FE97AA3A1C

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} scrVecCoorsX
 * @param {number} scrVecCoorsY
 * @param {number} scrVecCoorsZ
 */
export function updateTaskSweepAimPosition(ped: PedIndex, scrVecCoorsX: number, scrVecCoorsY: number, scrVecCoorsZ: number): void {
	const updateTaskSweepAimPosition_result = Citizen.invokeNative<void>('0xBDCCE8FE97AA3A1C', ped, scrVecCoorsX, scrVecCoorsY, scrVecCoorsZ);
	return updateTaskSweepAimPosition_result;
}