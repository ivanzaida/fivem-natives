import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_PLAYER_ACCOUNT_ID
 *
 * 0x17E5F27FA417E82E

 * 
 * Returns the PlayerAccountId of the given player. This is a persistent unique identifier received from ROS in our credentials.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function networkGetPlayerAccountId(player: PlayerIndex): number {
	const networkGetPlayerAccountId_result = Citizen.invokeNative<number>('0x17E5F27FA417E82E', player);
	return networkGetPlayerAccountId_result;
}