import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_AVERAGE_LATENCY
 *
 * 0xD29CB5E83871293B

 * 
 * Returns the average one-way latency for messages received from the specified remote player. This should only be called on remote players.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function networkGetAverageLatency(player: PlayerIndex): number {
	const networkGetAverageLatency_result = Citizen.invokeNative<number>('0xD29CB5E83871293B', player);
	return networkGetAverageLatency_result;
}