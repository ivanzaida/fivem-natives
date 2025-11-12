/**
 * NETWORK:NETWORK_SESSION_HOST_SINGLE_PLAYER
 *
 * 0x827C8918F31EF9CD

 * 
 * Hosts a single player session. This is a one player, private session that is not invitable and cannot be
 * joined via matchmaking.
 * 
 * Loads up the map that is loaded when beeing in mission creator
 * Player gets placed in a mix between online/offline mode
 * p0 is always 2 in R scripts.
 * 
 * Appears to be patched in gtav b757 (game gets terminated) alonside with most other network natives to prevent online modding ~ghost30812
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} gameMode
 */
export function networkSessionHostSinglePlayer(gameMode: number): void {
	const networkSessionHostSinglePlayer_result = Citizen.invokeNative<void>('0x827C8918F31EF9CD', gameMode);
	return networkSessionHostSinglePlayer_result;
}