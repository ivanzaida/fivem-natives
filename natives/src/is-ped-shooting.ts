import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_SHOOTING
 *
 * 0x65F146FF416F109F

 * 
 * Returns whether the specified ped is shooting.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedShooting(ped: PedIndex): boolean {
	const isPedShooting_result = Citizen.invokeNative<boolean>('0x65F146FF416F109F', ped);
	return isPedShooting_result;
}