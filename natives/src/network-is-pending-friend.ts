import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_PENDING_FRIEND
 *
 * 0x8353648A58677B60

 * 
 * Checks if a friend request is pending for this player (on either side)
 * 
 * This function is hard-coded to always return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkIsPendingFriend(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkIsPendingFriend_result = Citizen.invokeNative<boolean>('0x8353648A58677B60', gamerHandle.dataView);
	return networkIsPendingFriend_result;
}