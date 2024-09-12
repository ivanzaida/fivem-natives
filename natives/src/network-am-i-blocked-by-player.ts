import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_AM_I_BLOCKED_BY_PLAYER
 *
 * 0x37B71363FBA86179

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} netPlayerID
 * @returns {boolean}  
 */
export function networkAmIBlockedByPlayer(netPlayerID: PlayerIndex): boolean {
	const networkAmIBlockedByPlayer_result = Citizen.invokeNative<boolean>('0x37B71363FBA86179', netPlayerID);
	return networkAmIBlockedByPlayer_result;
}