import { EMmFlags } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SESSION_DO_FREEROAM_QUICKMATCH
 *
 * 0xD9082A1A08CF156E

 * 
 * ------------------------------------------------------------------
 * @param {number} gameMode
 * @param {number} maxPlayers
 * @param {EMmFlags} matchmakingFlags
 * @returns {boolean}  
 */
export function networkSessionDoFreeroamQuickmatch(gameMode: number, maxPlayers: number, matchmakingFlags: EMmFlags | number): boolean {
	const networkSessionDoFreeroamQuickmatch_result = Citizen.invokeNative<boolean>('0xD9082A1A08CF156E', gameMode, maxPlayers, matchmakingFlags);
	return networkSessionDoFreeroamQuickmatch_result;
}