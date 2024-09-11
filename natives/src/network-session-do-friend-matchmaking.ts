import { EMmFlags } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SESSION_DO_FRIEND_MATCHMAKING
 *
 * 0x0563974EC0E4F379

 * 
 * ------------------------------------------------------------------
 * @param {number} gameMode
 * @param {number} maxPlayers
 * @param {EMmFlags} matchmakingFlags
 * @returns {boolean}  
 */
export function networkSessionDoFriendMatchmaking(gameMode: number, maxPlayers: number, matchmakingFlags: EMmFlags | number): boolean {
	const networkSessionDoFriendMatchmaking_result = Citizen.invokeNative<boolean>('0x0563974EC0E4F379', gameMode, maxPlayers, matchmakingFlags);
	return networkSessionDoFriendMatchmaking_result;
}