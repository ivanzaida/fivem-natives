import { PedIndex, ECombatRange } from '@ivanzaida/structures'

/**
 * PED:GET_PED_COMBAT_RANGE
 *
 * 0x883842C6E1BC2105

 * 
 * See SET_PED_COMBAT_RANGE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {ECombatRange}  
 */
export function getPedCombatRange(ped: PedIndex): ECombatRange {
	const getPedCombatRange_result = Citizen.invokeNative<ECombatRange>('0x883842C6E1BC2105', ped);
	return getPedCombatRange_result;
}