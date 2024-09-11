import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_PLAYER_LOUDNESS
 *
 * 0xF2B38A65CE1CD227

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} netPlayerID
 * @returns {number}  
 */
export function networkGetPlayerLoudness(netPlayerID: PlayerIndex): number {
	const networkGetPlayerLoudness_result = Citizen.invokeNative<number>('0xF2B38A65CE1CD227', netPlayerID);
	return networkGetPlayerLoudness_result;
}