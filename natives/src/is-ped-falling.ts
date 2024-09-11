import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_FALLING
 *
 * 0x9857C978BD3CBEDA

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedFalling(ped: PedIndex): boolean {
	const isPedFalling_result = Citizen.invokeNative<boolean>('0x9857C978BD3CBEDA', ped);
	return isPedFalling_result;
}