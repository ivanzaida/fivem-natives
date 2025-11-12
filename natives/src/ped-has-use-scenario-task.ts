import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:PED_HAS_USE_SCENARIO_TASK
 *
 * 0x1FF4AE189014B73E

 * 
 * Use IS_PED_ACTIVE_IN_SCENARIO to check if the ped is not doing intro/exit
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function pedHasUseScenarioTask(ped: PedIndex): boolean {
	const pedHasUseScenarioTask_result = Citizen.invokeNative<boolean>('0x1FF4AE189014B73E', ped);
	return pedHasUseScenarioTask_result;
}