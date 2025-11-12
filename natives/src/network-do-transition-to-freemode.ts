import { ToFreemodeGamers } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_DO_TRANSITION_TO_FREEMODE
 *
 * 0x26A3263324259353

 * 
 * This will transition back to freemode from a launched activity session.
 * All players returning to freemode should call this (including a quit)
 * This takes an array of gamer handles of players that we should take with us.
 * Specify 0 for nNumGamers to quit back solo
 * nMaxPlayers is used if we cannot find a match and need to host.
 * 
 * p2 is true 3/4 of the occurrences I found.
 * 'players' is the number of players for a session. On PS3/360 it's always 18. On PC it's 32.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ToFreemodeGamers} gamers [Ref]
 * @param {number} numGamers
 * @param {boolean} socialMatchmaking
 * @param {number} maxPlayers
 * @param {number} mmFlags
 * @returns {boolean}  
 */
export function networkDoTransitionToFreemode(gamers: ToFreemodeGamers /* ptr */, numGamers: number, socialMatchmaking: boolean, maxPlayers: number, mmFlags: number = 0): boolean {
	const networkDoTransitionToFreemode_result = Citizen.invokeNative<boolean>('0x26A3263324259353', gamers.dataView, numGamers, socialMatchmaking, maxPlayers, mmFlags);
	return networkDoTransitionToFreemode_result;
}