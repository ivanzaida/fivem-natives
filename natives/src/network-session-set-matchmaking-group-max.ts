import { EMatchmakingGroup } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SESSION_SET_MATCHMAKING_GROUP_MAX
 *
 * 0x4EDA84E31A9AD294

 * 
 * playerType is an unsigned int from 0 to 4
 * 0 = regular joiner
 * 4 = spectator
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EMatchmakingGroup} group
 * @param {number} maximum
 */
export function networkSessionSetMatchmakingGroupMax(group: EMatchmakingGroup | number, maximum: number): void {
	const networkSessionSetMatchmakingGroupMax_result = Citizen.invokeNative<void>('0x4EDA84E31A9AD294', group, maximum);
	return networkSessionSetMatchmakingGroupMax_result;
}