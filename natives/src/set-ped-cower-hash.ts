import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_COWER_HASH
 *
 * 0xE591C62C2F46B4D7

 * 
 * p1: Only "CODE_HUMAN_STAND_COWER" found in the b617d scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} cowerScenarioName
 */
export function setPedCowerHash(ped: PedIndex, cowerScenarioName: string): void {
	const setPedCowerHash_result = Citizen.invokeNative<void>('0xE591C62C2F46B4D7', ped, cowerScenarioName);
	return setPedCowerHash_result;
}