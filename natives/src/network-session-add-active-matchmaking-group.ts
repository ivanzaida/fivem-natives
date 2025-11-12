import { EMatchmakingGroup } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SESSION_ADD_ACTIVE_MATCHMAKING_GROUP
 *
 * 0x5A59537D7B87C071

 * 
 * groupId range: [0, 4]
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EMatchmakingGroup} group
 */
export function networkSessionAddActiveMatchmakingGroup(group: EMatchmakingGroup | number): void {
	const networkSessionAddActiveMatchmakingGroup_result = Citizen.invokeNative<void>('0x5A59537D7B87C071', group);
	return networkSessionAddActiveMatchmakingGroup_result;
}