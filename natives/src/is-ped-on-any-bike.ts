import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_ON_ANY_BIKE
 *
 * 0xFFEFA49356BD7CA2

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedOnAnyBike(ped: PedIndex): boolean {
	const isPedOnAnyBike_result = Citizen.invokeNative<boolean>('0xFFEFA49356BD7CA2', ped);
	return isPedOnAnyBike_result;
}