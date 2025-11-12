import { PlayerIndex, GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HANDLE_FROM_PLAYER
 *
 * 0x464E131FD68B953F

 * 
 * Retrieve a gamer handle from a player index. In non-network games, this will return the local gamer handle
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {GamerHandle} gamerHandle [Ref]
 * @param {number} sizeOfData
 */
export function networkHandleFromPlayer(player: PlayerIndex, gamerHandle: GamerHandle /* ptr */, sizeOfData: number): void {
	const networkHandleFromPlayer_result = Citizen.invokeNative<void>('0x464E131FD68B953F', player, gamerHandle.dataView, sizeOfData);
	return networkHandleFromPlayer_result;
}