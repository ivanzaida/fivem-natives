import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_IN_HIGH_COVER
 *
 * 0xFAD234E6A6D853B1

 * 
 * Checks if the ped is currently in high cover, will return false if in low cover.
 * This will also return false and assert if the ped is not in cover at all, so you should call IS_PED_IN_COVER first.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedInHighCover(ped: PedIndex): boolean {
	const isPedInHighCover_result = Citizen.invokeNative<boolean>('0xFAD234E6A6D853B1', ped);
	return isPedInHighCover_result;
}