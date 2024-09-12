/**
 * NETWORK:NETWORK_SESSION_IS_CLOSED_FRIENDS
 *
 * 0xCA440502CAC1617C

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkSessionIsClosedFriends(): boolean {
	const networkSessionIsClosedFriends_result = Citizen.invokeNative<boolean>('0xCA440502CAC1617C', );
	return networkSessionIsClosedFriends_result;
}