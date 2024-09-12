import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLEAR_COVER_POINT_FOR_PED
 *
 * 0xE3AACA4B344A6492

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearCoverPointForPed(ped: PedIndex): void {
	const clearCoverPointForPed_result = Citizen.invokeNative<void>('0xE3AACA4B344A6492', ped);
	return clearCoverPointForPed_result;
}