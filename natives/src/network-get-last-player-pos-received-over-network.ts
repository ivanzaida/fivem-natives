import { PlayerIndex, Vector3 } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_LAST_PLAYER_POS_RECEIVED_OVER_NETWORK
 *
 * 0x65D66F9646758265

 * 
 * Returns the last position for this player received over the network (Note: This may be different to where the player is on the local machine currently)
 * 
 * Returns the coordinates of another player.
 * Does not work if you enter your own player id as p0 (will return `(0.0, 0.0, 0.0)` in that case).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {Vector3}  
 */
export function networkGetLastPlayerPosReceivedOverNetwork(player: PlayerIndex): Vector3 {
	const networkGetLastPlayerPosReceivedOverNetwork_result = Citizen.invokeNative<Vector3>('0x65D66F9646758265', player);
	return networkGetLastPlayerPosReceivedOverNetwork_result;
}