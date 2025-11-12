/**
 * PLAYER:IS_PLAYER_ONLINE
 *
 * 0x99DFE4CAC19D527F

 * 
 * Returns TRUE if the game is in online mode and FALSE if in offline mode.
 * 
 * This is an alias for NETWORK_IS_SIGNED_ONLINE.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isPlayerOnline(): boolean {
	const isPlayerOnline_result = Citizen.invokeNative<boolean>('0x99DFE4CAC19D527F', );
	return isPlayerOnline_result;
}