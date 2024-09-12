/**
 * NETWORK:NETWORK_SESSION_JOIN_INVITE
 *
 * 0x065ED066142EEE36

 * 
 * ------------------------------------------------------------------
 */
export function networkSessionJoinInvite(): void {
	const networkSessionJoinInvite_result = Citizen.invokeNative<void>('0x065ED066142EEE36', );
	return networkSessionJoinInvite_result;
}