import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_CLIMBING
 *
 * 0x7CB06BFD42FB0E24

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedClimbing(ped: PedIndex): boolean {
	const isPedClimbing_result = Citizen.invokeNative<boolean>('0x7CB06BFD42FB0E24', ped);
	return isPedClimbing_result;
}