/**
 * NETWORK:NETWORK_HAS_CONFIRMED_INVITE
 *
 * 0x60EDC5810CB82627

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHasConfirmedInvite(): boolean {
	const networkHasConfirmedInvite_result = Citizen.invokeNative<boolean>('0x60EDC5810CB82627', );
	return networkHasConfirmedInvite_result;
}