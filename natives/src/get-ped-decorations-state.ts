import { PedIndex, EPedDecorationsState } from '@ivanzaida/structures'

/**
 * PED:GET_PED_DECORATIONS_STATE
 *
 * 0x1ACEEA8FD72F77BC

 * 
 * Get the state of decorations (tattoos/decals) on a ped, if any
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {EPedDecorationsState}  
 */
export function getPedDecorationsState(ped: PedIndex): EPedDecorationsState {
	const getPedDecorationsState_result = Citizen.invokeNative<EPedDecorationsState>('0x1ACEEA8FD72F77BC', ped);
	return getPedDecorationsState_result;
}