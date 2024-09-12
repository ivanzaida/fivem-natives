import { EMatchmakingGroup } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SESSION_GET_MATCHMAKING_GROUP_FREE
 *
 * 0x90383DF0E1713198

 * 
 * ------------------------------------------------------------------
 * @param {EMatchmakingGroup} group
 * @returns {number}  
 */
export function networkSessionGetMatchmakingGroupFree(group: EMatchmakingGroup | number): number {
	const networkSessionGetMatchmakingGroupFree_result = Citizen.invokeNative<number>('0x90383DF0E1713198', group);
	return networkSessionGetMatchmakingGroupFree_result;
}