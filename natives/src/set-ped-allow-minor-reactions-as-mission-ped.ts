import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_ALLOW_MINOR_REACTIONS_AS_MISSION_PED
 *
 * 0x55A8A33A33B949EC

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} allowReactions
 */
export function setPedAllowMinorReactionsAsMissionPed(ped: PedIndex, allowReactions: boolean): void {
	const setPedAllowMinorReactionsAsMissionPed_result = Citizen.invokeNative<void>('0x55A8A33A33B949EC', ped, allowReactions);
	return setPedAllowMinorReactionsAsMissionPed_result;
}