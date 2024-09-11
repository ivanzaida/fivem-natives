import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:IS_PED_RUNNING_ARREST_TASK
 *
 * 0x0441E4524AA1CF9C

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedRunningArrestTask(ped: PedIndex): boolean {
	const isPedRunningArrestTask_result = Citizen.invokeNative<boolean>('0x0441E4524AA1CF9C', ped);
	return isPedRunningArrestTask_result;
}