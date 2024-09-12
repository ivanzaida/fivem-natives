import { EActivityIsland } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_DO_TRANSITION_QUICKMATCH_ASYNC
 *
 * 0x01C9B0FC57F5144E

 * 
 * ------------------------------------------------------------------
 * @param {number} gameMode
 * @param {number} maxPlayers
 * @param {number} activityType
 * @param {number} activityID
 * @param {number} mmFlags
 * @param {EActivityIsland} activityIsland
 * @returns {boolean}  
 */
export function networkDoTransitionQuickmatchAsync(gameMode: number, maxPlayers: number, activityType: number, activityID: number, mmFlags: number = 0, activityIsland: EActivityIsland | number = 1): boolean {
	const networkDoTransitionQuickmatchAsync_result = Citizen.invokeNative<boolean>('0x01C9B0FC57F5144E', gameMode, maxPlayers, activityType, activityID, mmFlags, activityIsland);
	return networkDoTransitionQuickmatchAsync_result;
}