import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:COUNT_PEDS_IN_COMBAT_WITH_TARGET_WITHIN_RADIUS
 *
 * 0xF483865E4C02C371

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} target
 * @param {number} vecSearchCenterX
 * @param {number} vecSearchCenterY
 * @param {number} vecSearchCenterZ
 * @param {number} searchRadius
 * @returns {number}  
 */
export function countPedsInCombatWithTargetWithinRadius(target: PedIndex, vecSearchCenterX: number, vecSearchCenterY: number, vecSearchCenterZ: number, searchRadius: number): number {
	const countPedsInCombatWithTargetWithinRadius_result = Citizen.invokeNative<number>('0xF483865E4C02C371', target, vecSearchCenterX, vecSearchCenterY, vecSearchCenterZ, searchRadius);
	return countPedsInCombatWithTargetWithinRadius_result;
}