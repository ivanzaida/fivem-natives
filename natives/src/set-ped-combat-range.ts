import { PedIndex, ECombatRange } from '@ivanzaida/structures'

/**
 * PED:SET_PED_COMBAT_RANGE
 *
 * 0x1090EAA386FB31A8

 * 
 * enum eCombatRange // 0xB69160F5
 * {
 * 	CR_Near,
 * 	CR_Medium,
 * 	CR_Far,
 * 	CR_VeryFar,
 * 	CR_NumRanges
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ECombatRange} combatRange
 */
export function setPedCombatRange(ped: PedIndex, combatRange: ECombatRange | number): void {
	const setPedCombatRange_result = Citizen.invokeNative<void>('0x1090EAA386FB31A8', ped, combatRange);
	return setPedCombatRange_result;
}