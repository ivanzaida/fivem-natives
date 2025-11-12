/**
 * NETWORK:NETWORK_STORE_INVITE_THROUGH_RESTART
 *
 * 0x918B9A135FB8B81F

 * 
 * Use this to flag that an invite should be kept through a restart.
 * Only call when the user has confirmed to restart
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkStoreInviteThroughRestart(): void {
	const networkStoreInviteThroughRestart_result = Citizen.invokeNative<void>('0x918B9A135FB8B81F', );
	return networkStoreInviteThroughRestart_result;
}