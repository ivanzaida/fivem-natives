import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HASH_FROM_PLAYER_HANDLE
 *
 * 0x3351FEF40EC734DB

 * 
 * Retrieve a hash for a gamer handle from a player index. In non-network games, this will return the local gamer handle
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function networkHashFromPlayerHandle(player: PlayerIndex): number {
	const networkHashFromPlayerHandle_result = Citizen.invokeNative<number>('0x3351FEF40EC734DB', player);
	return networkHashFromPlayerHandle_result;
}