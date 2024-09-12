import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_PED_ACCURACY
 *
 * 0xF558A1138519E6F6

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getPedAccuracy(ped: PedIndex): number {
	const getPedAccuracy_result = Citizen.invokeNative<number>('0xF558A1138519E6F6', ped);
	return getPedAccuracy_result;
}