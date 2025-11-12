import { PedIndex, PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_PLAYER_INDEX_FROM_PED
 *
 * 0x1C1C92A1CBAE364B

 * 
 * Returns the Player associated to a given Ped when in an online session.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {PlayerIndex}  
 */
export function networkGetPlayerIndexFromPed(ped: PedIndex): PlayerIndex {
	const networkGetPlayerIndexFromPed_result = Citizen.invokeNative<PlayerIndex>('0x1C1C92A1CBAE364B', ped);
	return networkGetPlayerIndexFromPed_result;
}