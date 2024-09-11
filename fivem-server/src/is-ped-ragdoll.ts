import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_PED_RAGDOLL
 *
 * 0XC833BBE1

 * If the ped handle passed through the parenthesis is in a ragdoll state this will return true.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedRagdoll(ped: PedIndex): boolean {
	const isPedRagdoll_result = Citizen.invokeNative<boolean>('0XC833BBE1', ped);
	return isPedRagdoll_result;
}