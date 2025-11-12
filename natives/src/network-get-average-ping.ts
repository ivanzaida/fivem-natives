import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_AVERAGE_PING
 *
 * 0x20EDD3199D02CB60

 * 
 * Returns the average ping time between the local player and the specified remote player. This is the time it takes for a message to be sent
 * and then received, processed and the ACK received. This should only be called on remote players.
 * 
 * Same as NETWORK_GET_AVERAGE_LATENCY
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function networkGetAveragePing(player: PlayerIndex): number {
	const networkGetAveragePing_result = Citizen.invokeNative<number>('0x20EDD3199D02CB60', player);
	return networkGetAveragePing_result;
}