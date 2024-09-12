import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_AM_I_MUTED_BY_PLAYER
 *
 * 0xDCEC24AE33904F8D

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} netPlayerID
 * @returns {boolean}  
 */
export function networkAmIMutedByPlayer(netPlayerID: PlayerIndex): boolean {
	const networkAmIMutedByPlayer_result = Citizen.invokeNative<boolean>('0xDCEC24AE33904F8D', netPlayerID);
	return networkAmIMutedByPlayer_result;
}