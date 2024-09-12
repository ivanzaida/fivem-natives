import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_SEAT_PED_IS_TRYING_TO_ENTER
 *
 * 0x03603B0046EE6ACD

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getSeatPedIsTryingToEnter(ped: PedIndex): number {
	const getSeatPedIsTryingToEnter_result = Citizen.invokeNative<number>('0x03603B0046EE6ACD', ped);
	return getSeatPedIsTryingToEnter_result;
}