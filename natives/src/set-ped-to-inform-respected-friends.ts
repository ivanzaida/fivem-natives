import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_TO_INFORM_RESPECTED_FRIENDS
 *
 * 0xDC914F868C070C56

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} distance
 * @param {number} maximumNumber
 */
export function setPedToInformRespectedFriends(ped: PedIndex, distance: number, maximumNumber: number): void {
	const setPedToInformRespectedFriends_result = Citizen.invokeNative<void>('0xDC914F868C070C56', ped, distance, maximumNumber);
	return setPedToInformRespectedFriends_result;
}