/**
 * NETWORK:NETWORK_IS_IN_PLATFORM_PARTY_CHAT
 *
 * 0x03D7696E3D331706

 * 
 * Hardcoded to return false.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsInPlatformPartyChat(): boolean {
	const networkIsInPlatformPartyChat_result = Citizen.invokeNative<boolean>('0x03D7696E3D331706', );
	return networkIsInPlatformPartyChat_result;
}