/**
 * NETWORK:NETWORK_IS_SIGNED_ONLINE
 *
 * 0x261E3728EE56B3AC

 * 
 * Returns whether the game is not in offline mode.
 * 
 * seemed not to work for some ppl
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsSignedOnline(): boolean {
	const networkIsSignedOnline_result = Citizen.invokeNative<boolean>('0x261E3728EE56B3AC', );
	return networkIsSignedOnline_result;
}