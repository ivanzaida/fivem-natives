import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_RUNNING_MELEE_TASK
 *
 * 0x942229677774817C

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedRunningMeleeTask(ped: PedIndex): boolean {
	const isPedRunningMeleeTask_result = Citizen.invokeNative<boolean>('0x942229677774817C', ped);
	return isPedRunningMeleeTask_result;
}