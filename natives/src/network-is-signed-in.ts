/**
 * NETWORK:NETWORK_IS_SIGNED_IN
 *
 * 0x5F9F81C08516558E

 * 
 * Returns whether the player is signed into Social Club.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsSignedIn(): boolean {
	const networkIsSignedIn_result = Citizen.invokeNative<boolean>('0x5F9F81C08516558E', );
	return networkIsSignedIn_result;
}