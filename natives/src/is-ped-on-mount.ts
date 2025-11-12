import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_ON_MOUNT
 *
 * 0x1BAABBB7277FCD90

 * 
 * Same function call as PED::GET_MOUNT, aka just returns 0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedOnMount(ped: PedIndex): boolean {
	const isPedOnMount_result = Citizen.invokeNative<boolean>('0x1BAABBB7277FCD90', ped);
	return isPedOnMount_result;
}