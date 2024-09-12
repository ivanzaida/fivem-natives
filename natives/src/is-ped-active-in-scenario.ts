import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:IS_PED_ACTIVE_IN_SCENARIO
 *
 * 0x55057693AB7FCFF9

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedActiveInScenario(ped: PedIndex): boolean {
	const isPedActiveInScenario_result = Citizen.invokeNative<boolean>('0x55057693AB7FCFF9', ped);
	return isPedActiveInScenario_result;
}