/**
 * NETWORK:NETWORK_SHOW_PSN_UGC_RESTRICTION
 *
 * 0xC7C2484FD7A1279A

 * 
 * Call to show system message about chat restriction.
 * 
 * This native does absolutely nothing, just a nullsub
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkShowPsnUgcRestriction(): void {
	const networkShowPsnUgcRestriction_result = Citizen.invokeNative<void>('0xC7C2484FD7A1279A', );
	return networkShowPsnUgcRestriction_result;
}