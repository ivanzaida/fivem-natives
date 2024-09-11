import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_WETNESS
 *
 * 0xA60928A188EC78EF

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} wetLevel
 */
export function setPedWetness(ped: PedIndex, wetLevel: number): void {
	const setPedWetness_result = Citizen.invokeNative<void>('0xA60928A188EC78EF', ped, wetLevel);
	return setPedWetness_result;
}