import { EActivityIsland } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_DO_TRANSITION_QUICKMATCH
 *
 * 0xFC1123FE6C7D5909

 * 
 * Find a transition session.
 * If nActivityType is -1, we will find any open transition session (any activity)
 * Otherwise, if nActivityID is 0, we will find any open transition of the type specified by nActivityType
 * If matchmaking fails to find any results, we will host our own session if both nActivityType and nActivityID are valid.
 * 
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
export function networkDoTransitionQuickmatch(gameMode: number, maxPlayers: number, activityType: number, activityID: number, mmFlags: number = 0, activityIsland: EActivityIsland | number = 1): boolean {
	const networkDoTransitionQuickmatch_result = Citizen.invokeNative<boolean>('0xFC1123FE6C7D5909', gameMode, maxPlayers, activityType, activityID, mmFlags, activityIsland);
	return networkDoTransitionQuickmatch_result;
}