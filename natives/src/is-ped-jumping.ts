import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_JUMPING
 *
 * 0x2C807E70DCB4BB36

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedJumping(ped: PedIndex): boolean {
	const isPedJumping_result = Citizen.invokeNative<boolean>('0x2C807E70DCB4BB36', ped);
	return isPedJumping_result;
}