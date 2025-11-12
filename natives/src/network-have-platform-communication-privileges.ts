/**
 * NETWORK:_NETWORK_HAVE_PLATFORM_COMMUNICATION_PRIVILEGES
 *
 * 0xE1E02509169C124E

 * 
 * Appears to be PlayStation-specific. Always returns true on other platforms if signed in with the primary user profile
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHavePlatformCommunicationPrivileges(): boolean {
	const networkHavePlatformCommunicationPrivileges_result = Citizen.invokeNative<boolean>('0xE1E02509169C124E', );
	return networkHavePlatformCommunicationPrivileges_result;
}