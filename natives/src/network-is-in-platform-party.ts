/**
 * NETWORK:NETWORK_IS_IN_PLATFORM_PARTY
 *
 * 0x6FE3848CD1092574

 * 
 * Hardcoded to return false.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsInPlatformParty(): boolean {
	const networkIsInPlatformParty_result = Citizen.invokeNative<boolean>('0x6FE3848CD1092574', );
	return networkIsInPlatformParty_result;
}