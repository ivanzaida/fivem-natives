/**
 * NETWORK:NETWORK_CAN_ENTER_MULTIPLAYER
 *
 * 0x5FA9B89685B7F17E

 * 
 * Return TRUE if the game can ENTER multiplayer.
 * Poll this function, it will eventually return TRUE
 * Must be called prior to:
 * NETWORK_SESSION_ENTER
 * NETWORK_SESSION_FRIEND_MATCHMAKING
 * NETWORK_SESSION_SOCIAL_MATCHMAKING
 * NETWORK_SESSION_CREW_MATCHMAKING
 * NETWORK_SESSION_ACTIVITY_QUICKMATCH
 * NETWORK_SESSION_HOST
 * Code deal with NETWORK_SESSION_JOIN_INVITE
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkCanEnterMultiplayer(): boolean {
	const networkCanEnterMultiplayer_result = Citizen.invokeNative<boolean>('0x5FA9B89685B7F17E', );
	return networkCanEnterMultiplayer_result;
}