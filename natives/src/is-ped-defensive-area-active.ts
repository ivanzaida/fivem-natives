import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_DEFENSIVE_AREA_ACTIVE
 *
 * 0x4B3F6436660DC25C

 * 
 * Checks if the ped's defensive area is active
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} checkSecondaryDefensiveArea
 * @returns {boolean}  
 */
export function isPedDefensiveAreaActive(ped: PedIndex, checkSecondaryDefensiveArea: boolean): boolean {
	const isPedDefensiveAreaActive_result = Citizen.invokeNative<boolean>('0x4B3F6436660DC25C', ped, checkSecondaryDefensiveArea);
	return isPedDefensiveAreaActive_result;
}