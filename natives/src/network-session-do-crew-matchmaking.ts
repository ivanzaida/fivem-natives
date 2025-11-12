import { EMmFlags } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SESSION_DO_CREW_MATCHMAKING
 *
 * 0x2FFEC9DB9C5EB929

 * 
 * p4 seems to be unused in 1.60/build 2628
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} crewId
 * @param {number} gameMode
 * @param {number} maxPlayers
 * @param {EMmFlags} matchmakingFlags
 * @returns {boolean}  
 */
export function networkSessionDoCrewMatchmaking(crewId: number, gameMode: number, maxPlayers: number, matchmakingFlags: EMmFlags | number): boolean {
	const networkSessionDoCrewMatchmaking_result = Citizen.invokeNative<boolean>('0x2FFEC9DB9C5EB929', crewId, gameMode, maxPlayers, matchmakingFlags);
	return networkSessionDoCrewMatchmaking_result;
}