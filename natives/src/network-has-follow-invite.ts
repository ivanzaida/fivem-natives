/**
 * NETWORK:NETWORK_HAS_FOLLOW_INVITE
 *
 * 0x6E4D523086634F4B

 * 
 * Follow invite actions. These are invites sent by someone who has tagged the local player
 * as a 'follower'.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHasFollowInvite(): boolean {
	const networkHasFollowInvite_result = Citizen.invokeNative<boolean>('0x6E4D523086634F4B', );
	return networkHasFollowInvite_result;
}