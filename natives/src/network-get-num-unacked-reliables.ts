import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_NUM_UNACKED_RELIABLES
 *
 * 0xC424F771EFDD2A58

 * 
 * Returns the number of current unacked reliable messages to the specified remote player.
 * This should only be called on remote players.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function networkGetNumUnackedReliables(player: PlayerIndex): number {
	const networkGetNumUnackedReliables_result = Citizen.invokeNative<number>('0xC424F771EFDD2A58', player);
	return networkGetNumUnackedReliables_result;
}