import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_PERFORMING_A_COUNTER_ATTACK
 *
 * 0xB915B7889D38C06A

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedPerformingACounterAttack(ped: PedIndex): boolean {
	const isPedPerformingACounterAttack_result = Citizen.invokeNative<boolean>('0xB915B7889D38C06A', ped);
	return isPedPerformingACounterAttack_result;
}