/**
 * NETWORK:NETWORK_IS_TRANSITION_CLOSED_FRIENDS
 *
 * 0x250E5C2B310DC7C4

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsTransitionClosedFriends(): boolean {
	const networkIsTransitionClosedFriends_result = Citizen.invokeNative<boolean>('0x250E5C2B310DC7C4', );
	return networkIsTransitionClosedFriends_result;
}