/**
 * NETWORK:NETWORK_ACTION_FOLLOW_INVITE
 *
 * 0x9BC1C803BECC2537

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkActionFollowInvite(): boolean {
	const networkActionFollowInvite_result = Citizen.invokeNative<boolean>('0x9BC1C803BECC2537', );
	return networkActionFollowInvite_result;
}