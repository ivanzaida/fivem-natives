import { ToFreemodeGamers, EActivityIsland } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_DO_TRANSITION_QUICKMATCH_WITH_GROUP
 *
 * 0x8AB21B54A01F6CC2

 * 
 * Find a transition session.
 * Variant of above that works with a group
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} gameMode
 * @param {number} maxPlayers
 * @param {number} activityType
 * @param {number} activityID
 * @param {ToFreemodeGamers} gamers [Ref]
 * @param {number} numGamers
 * @param {number} mmFlags
 * @param {EActivityIsland} activityIsland
 * @returns {boolean}  
 */
export function networkDoTransitionQuickmatchWithGroup(gameMode: number, maxPlayers: number, activityType: number, activityID: number, gamers: ToFreemodeGamers /* ptr */, numGamers: number, mmFlags: number = 0, activityIsland: EActivityIsland | number = 1): boolean {
	const networkDoTransitionQuickmatchWithGroup_result = Citizen.invokeNative<boolean>('0x8AB21B54A01F6CC2', gameMode, maxPlayers, activityType, activityID, gamers.dataView, numGamers, mmFlags, activityIsland);
	return networkDoTransitionQuickmatchWithGroup_result;
}