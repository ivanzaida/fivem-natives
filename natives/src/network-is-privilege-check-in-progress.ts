/**
 * NETWORK:NETWORK_IS_PRIVILEGE_CHECK_IN_PROGRESS
 *
 * 0xA5D42B526D34A833

 * 
 * Hardcoded to return false.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsPrivilegeCheckInProgress(): boolean {
	const networkIsPrivilegeCheckInProgress_result = Citizen.invokeNative<boolean>('0xA5D42B526D34A833', );
	return networkIsPrivilegeCheckInProgress_result;
}