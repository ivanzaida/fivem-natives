import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:IS_PED_IN_WRITHE
 *
 * 0xCE6BB45648900227

 * 
 * This native checks if a ped is on the ground, in pain from a (gunshot) wound.
 * Returns `true` if the ped is in writhe, `false` otherwise.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedInWrithe(ped: PedIndex): boolean {
	const isPedInWrithe_result = Citizen.invokeNative<boolean>('0xCE6BB45648900227', ped);
	return isPedInWrithe_result;
}