import { EMmFlags } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SESSION_DO_ACTIVITY_QUICKMATCH
 *
 * 0x3B554BBD6F262ED5

 * 
 * ------------------------------------------------------------------
 * @param {number} gameMode
 * @param {number} maxPlayers
 * @param {number} activityType
 * @param {number} activityId
 * @param {EMmFlags} matchmakingFlags
 * @returns {boolean}  
 */
export function networkSessionDoActivityQuickmatch(gameMode: number, maxPlayers: number, activityType: number, activityId: number, matchmakingFlags: EMmFlags | number): boolean {
	const networkSessionDoActivityQuickmatch_result = Citizen.invokeNative<boolean>('0x3B554BBD6F262ED5', gameMode, maxPlayers, activityType, activityId, matchmakingFlags);
	return networkSessionDoActivityQuickmatch_result;
}