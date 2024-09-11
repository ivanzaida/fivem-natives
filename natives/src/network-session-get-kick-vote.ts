import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SESSION_GET_KICK_VOTE
 *
 * 0xB1397F80306800D5

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} netPlayerID
 * @returns {boolean}  
 */
export function networkSessionGetKickVote(netPlayerID: PlayerIndex): boolean {
	const networkSessionGetKickVote_result = Citizen.invokeNative<boolean>('0xB1397F80306800D5', netPlayerID);
	return networkSessionGetKickVote_result;
}