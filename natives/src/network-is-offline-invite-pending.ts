/**
 * NETWORK:NETWORK_IS_OFFLINE_INVITE_PENDING
 *
 * 0xDB0CDDD9A5B1C7A9

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsOfflineInvitePending(): boolean {
	const networkIsOfflineInvitePending_result = Citizen.invokeNative<boolean>('0xDB0CDDD9A5B1C7A9', );
	return networkIsOfflineInvitePending_result;
}