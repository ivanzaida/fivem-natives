/**
 * NETWORK:NETWORK_DO_TRANSITION_TO_GAME
 *
 * 0x58B069A2B3372724

 * 
 * This will transition back to freemode from a launched activity session.
 * All players returning to freemode should call this (including a quit)
 * bWithPlayers should only be used on session host and indicates that we'll
 * inform the remaining players to come with us. Use when host hits 'continue'
 * nMaxPlayers is used if we cannot find a match and need to host.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} withPlayers
 * @param {number} maxPlayers
 * @returns {boolean}  
 */
export function networkDoTransitionToGame(withPlayers: boolean, maxPlayers: number): boolean {
	const networkDoTransitionToGame_result = Citizen.invokeNative<boolean>('0x58B069A2B3372724', withPlayers, maxPlayers);
	return networkDoTransitionToGame_result;
}