import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_RAGDOLL
 *
 * 0x8BF5256C439DF778

 * 
 * If the ped handle passed through the parenthesis is in a ragdoll state this will return true.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedRagdoll(ped: PedIndex): boolean {
	const isPedRagdoll_result = Citizen.invokeNative<boolean>('0x8BF5256C439DF778', ped);
	return isPedRagdoll_result;
}