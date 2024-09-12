import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_SCRIPT_TASK_STAGE
 *
 * 0X44B0E5E2

 * Gets the stage of the peds scripted task.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped.
 * @returns {number}  The stage of the ped's scripted task. A value of 3 denotes no script task is assigned.
 */
export function getPedScriptTaskStage(ped: PedIndex): number {
	const getPedScriptTaskStage_result = Citizen.invokeNative<number>('0X44B0E5E2', ped);
	return getPedScriptTaskStage_result;
}