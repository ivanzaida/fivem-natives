import { EMatchmakingGroup } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SESSION_SET_MATCHMAKING_GROUP
 *
 * 0x9A651BCFA544373C

 * 
 * Functions to allow script to set the matchmaking group for the local player and the maximum
 * number of players in each group
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EMatchmakingGroup} group
 */
export function networkSessionSetMatchmakingGroup(group: EMatchmakingGroup | number): void {
	const networkSessionSetMatchmakingGroup_result = Citizen.invokeNative<void>('0x9A651BCFA544373C', group);
	return networkSessionSetMatchmakingGroup_result;
}