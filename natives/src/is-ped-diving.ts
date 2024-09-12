import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_DIVING
 *
 * 0xCD80FA7E842E5CA9

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedDiving(ped: PedIndex): boolean {
	const isPedDiving_result = Citizen.invokeNative<boolean>('0xCD80FA7E842E5CA9', ped);
	return isPedDiving_result;
}