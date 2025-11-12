import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_IN_COVER
 *
 * 0xD6179D448A06A77F

 * 
 * p1 is nearly always 0 in the scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} limitToPedsInCoverThatAreIdle
 * @returns {boolean}  
 */
export function isPedInCover(ped: PedIndex, limitToPedsInCoverThatAreIdle: boolean = false): boolean {
	const isPedInCover_result = Citizen.invokeNative<boolean>('0xD6179D448A06A77F', ped, limitToPedsInCoverThatAreIdle);
	return isPedInCover_result;
}