import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_IN_COVER_FACING_LEFT
 *
 * 0xC0BE0D29628A246A

 * 
 * Checks if the ped is currently facing left in cover. Note you should call IS_PED_IN_COVER first to ensure the ped is
 * in cover, this will return false if the ped is not in cover.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedInCoverFacingLeft(ped: PedIndex): boolean {
	const isPedInCoverFacingLeft_result = Citizen.invokeNative<boolean>('0xC0BE0D29628A246A', ped);
	return isPedInCoverFacingLeft_result;
}