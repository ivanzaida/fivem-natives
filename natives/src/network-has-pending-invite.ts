/**
 * NETWORK:NETWORK_HAS_PENDING_INVITE
 *
 * 0x6F5C1B03EC881534

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHasPendingInvite(): boolean {
	const networkHasPendingInvite_result = Citizen.invokeNative<boolean>('0x6F5C1B03EC881534', );
	return networkHasPendingInvite_result;
}