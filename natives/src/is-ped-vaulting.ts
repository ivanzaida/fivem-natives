import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_VAULTING
 *
 * 0x75B105C651D87D0E

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedVaulting(ped: PedIndex): boolean {
	const isPedVaulting_result = Citizen.invokeNative<boolean>('0x75B105C651D87D0E', ped);
	return isPedVaulting_result;
}