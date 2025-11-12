import { IntRef } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CAN_ACCESS_MULTIPLAYER
 *
 * 0x0C81430427CA20D7

 * 
 * Return TRUE if the game can ACCESS multiplayer.
 * Check this function once. If FALSE, fall out of MP.
 * Must be called prior to:
 * NETWORK_SESSION_ENTER
 * NETWORK_SESSION_FRIEND_MATCHMAKING
 * NETWORK_SESSION_SOCIAL_MATCHMAKING
 * NETWORK_SESSION_CREW_MATCHMAKING
 * NETWORK_SESSION_ACTIVITY_QUICKMATCH
 * NETWORK_SESSION_HOST
 * Code deal with NETWORK_SESSION_JOIN_INVITE
 * 
 * 11 - Need to download tunables.
 * 12 - Need to download background script.
 * 
 * Returns 1 if the multiplayer is loaded, otherwhise 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} accessCode [Ref]
 * @returns {boolean}  
 */
export function networkCanAccessMultiplayer(accessCode: IntRef /* ptr */): boolean {
	const networkCanAccessMultiplayer_result = Citizen.invokeNative<boolean>('0x0C81430427CA20D7', accessCode.dataView);
	return networkCanAccessMultiplayer_result;
}