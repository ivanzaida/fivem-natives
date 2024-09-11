import { PedIndex, EPedResetFlags } from '@ivanzaida/structures'

/**
 * PED:GET_PED_RESET_FLAG
 *
 * 0x025281901DECB32C

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedResetFlags} resetFlag
 * @returns {boolean}  
 */
export function getPedResetFlag(ped: PedIndex, resetFlag: EPedResetFlags | number): boolean {
	const getPedResetFlag_result = Citizen.invokeNative<boolean>('0x025281901DECB32C', ped, resetFlag);
	return getPedResetFlag_result;
}