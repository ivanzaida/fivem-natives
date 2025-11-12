import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ADD_FRIEND
 *
 * 0x454174F8A9B8D8A1

 * 
 * Sends an invitation to a player to become your friend.
 * On PS3, opens add friend dialogue with message
 * On 360, opens friend request UI (no message)
 * On PC, sends social club invite
 * Check NETWORK_IS_ADDING_FRIEND returns FALSE - we cannot have concurrent requests
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @param {string} message
 * @returns {boolean}  
 */
export function networkAddFriend(gamerHandle: GamerHandle /* ptr */, message: string): boolean {
	const networkAddFriend_result = Citizen.invokeNative<boolean>('0x454174F8A9B8D8A1', gamerHandle.dataView, message);
	return networkAddFriend_result;
}