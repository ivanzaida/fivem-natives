import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_HEADTRACKING_PED
 *
 * 0x9E437CA2E2CAD79D

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} firstPed
 * @param {PedIndex} secondPed
 * @returns {boolean}  
 */
export function isPedHeadtrackingPed(firstPed: PedIndex, secondPed: PedIndex): boolean {
	const isPedHeadtrackingPed_result = Citizen.invokeNative<boolean>('0x9E437CA2E2CAD79D', firstPed, secondPed);
	return isPedHeadtrackingPed_result;
}