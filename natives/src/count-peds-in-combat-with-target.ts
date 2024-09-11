import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:COUNT_PEDS_IN_COMBAT_WITH_TARGET
 *
 * 0x8B5EECBB010D0C63

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} target
 * @returns {number}  
 */
export function countPedsInCombatWithTarget(target: PedIndex): number {
	const countPedsInCombatWithTarget_result = Citizen.invokeNative<number>('0x8B5EECBB010D0C63', target);
	return countPedsInCombatWithTarget_result;
}