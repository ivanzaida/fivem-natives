import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_IN_PARACHUTE_FREE_FALL
 *
 * 0x333554781C7582D7

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedInParachuteFreeFall(ped: PedIndex): boolean {
	const isPedInParachuteFreeFall_result = Citizen.invokeNative<boolean>('0x333554781C7582D7', ped);
	return isPedInParachuteFreeFall_result;
}