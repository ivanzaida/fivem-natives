import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_SEAT_PED_IS_USING
 *
 * 0x57B78C17

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped the ped id
 * @returns {number}  
 */
export function getSeatPedIsUsing(ped: PedIndex): number {
	const getSeatPedIsUsing_result = Citizen.invokeNative<number>('0x57B78C17', ped);
	return getSeatPedIsUsing_result;
}