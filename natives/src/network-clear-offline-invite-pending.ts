/**
 * NETWORK:NETWORK_CLEAR_OFFLINE_INVITE_PENDING
 *
 * 0x984AEF3A625C58C4

 * 
 * ------------------------------------------------------------------
 */
export function networkClearOfflineInvitePending(): void {
	const networkClearOfflineInvitePending_result = Citizen.invokeNative<void>('0x984AEF3A625C58C4', );
	return networkClearOfflineInvitePending_result;
}