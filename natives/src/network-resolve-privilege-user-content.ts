/**
 * NETWORK:NETWORK_RESOLVE_PRIVILEGE_USER_CONTENT
 *
 * 0x1BF2060736C8594C

 * 
 * Hardcoded to return true.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkResolvePrivilegeUserContent(): boolean {
	const networkResolvePrivilegeUserContent_result = Citizen.invokeNative<boolean>('0x1BF2060736C8594C', );
	return networkResolvePrivilegeUserContent_result;
}