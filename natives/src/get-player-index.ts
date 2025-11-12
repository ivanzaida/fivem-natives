import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_INDEX
 *
 * 0xB6B621402486C3E4

 * 
 * Returns the same as PLAYER_ID and NETWORK_PLAYER_ID_TO_INT
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {PlayerIndex}  
 */
export function getPlayerIndex(): PlayerIndex {
	const getPlayerIndex_result = Citizen.invokeNative<PlayerIndex>('0xB6B621402486C3E4', );
	return getPlayerIndex_result;
}