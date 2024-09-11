import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_PLAYER_BLOCKED_BY_ME
 *
 * 0xF3BBDC6EE4727F8B

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} netPlayerID
 * @returns {boolean}  
 */
export function networkIsPlayerBlockedByMe(netPlayerID: PlayerIndex): boolean {
	const networkIsPlayerBlockedByMe_result = Citizen.invokeNative<boolean>('0xF3BBDC6EE4727F8B', netPlayerID);
	return networkIsPlayerBlockedByMe_result;
}