import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_TO_LOAD_COVER
 *
 * 0x70FF391C9D345B04

 * 
 * Please use this sparingly and remember to reset it after use.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} force
 */
export function setPedToLoadCover(ped: PedIndex, force: boolean): void {
	const setPedToLoadCover_result = Citizen.invokeNative<void>('0x70FF391C9D345B04', ped, force);
	return setPedToLoadCover_result;
}