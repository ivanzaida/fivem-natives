/**
 * NETWORK:NETWORK_DO_TRANSITION_TO_NEW_GAME
 *
 * 0x35628CF57A78C4CD

 * 
 * This will transition back to freemode from a launched activity session.
 * Like above but we immediately host a session.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} withPlayers
 * @param {number} maxPlayers
 * @param {boolean} isPrivate
 * @returns {boolean}  
 */
export function networkDoTransitionToNewGame(withPlayers: boolean, maxPlayers: number, isPrivate: boolean): boolean {
	const networkDoTransitionToNewGame_result = Citizen.invokeNative<boolean>('0x35628CF57A78C4CD', withPlayers, maxPlayers, isPrivate);
	return networkDoTransitionToNewGame_result;
}