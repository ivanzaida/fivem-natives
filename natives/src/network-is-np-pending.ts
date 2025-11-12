/**
 * NETWORK:NETWORK_IS_NP_PENDING
 *
 * 0x8C9CC81BD246DE31

 * 
 * Returns TRUE if the NP (online) operations are in a PENDING state for the local player. This means
 * that the user is online on PSN but we're still retrieving their NP availability, permissions, etc.
 * 
 * This function is hard-coded to always return 1.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsNpPending(): boolean {
	const networkIsNpPending_result = Citizen.invokeNative<boolean>('0x8C9CC81BD246DE31', );
	return networkIsNpPending_result;
}