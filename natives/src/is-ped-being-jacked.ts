import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_BEING_JACKED
 *
 * 0xA6534E6C7AE314D6

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedBeingJacked(ped: PedIndex): boolean {
	const isPedBeingJacked_result = Citizen.invokeNative<boolean>('0xA6534E6C7AE314D6', ped);
	return isPedBeingJacked_result;
}