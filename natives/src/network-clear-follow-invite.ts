/**
 * NETWORK:NETWORK_CLEAR_FOLLOW_INVITE
 *
 * 0x24F6146DA6B0AD4D

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkClearFollowInvite(): boolean {
	const networkClearFollowInvite_result = Citizen.invokeNative<boolean>('0x24F6146DA6B0AD4D', );
	return networkClearFollowInvite_result;
}