import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_ACCURACY
 *
 * 0xC652B7E19CE29859

 * 
 * accuracy = 0-100, 100 being perfectly accurate
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} newAccuracy
 */
export function setPedAccuracy(ped: PedIndex, newAccuracy: number): void {
	const setPedAccuracy_result = Citizen.invokeNative<void>('0xC652B7E19CE29859', ped, newAccuracy);
	return setPedAccuracy_result;
}