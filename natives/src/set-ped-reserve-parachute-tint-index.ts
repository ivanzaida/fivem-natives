import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_RESERVE_PARACHUTE_TINT_INDEX
 *
 * 0x68D0A76A580AC47D

 * 
 * This function sets the tint index of the reserve parachute pack for the ped
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} tint
 */
export function setPedReserveParachuteTintIndex(ped: PedIndex, tint: number): void {
	const setPedReserveParachuteTintIndex_result = Citizen.invokeNative<void>('0x68D0A76A580AC47D', ped, tint);
	return setPedReserveParachuteTintIndex_result;
}