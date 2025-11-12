/**
 * NETWORK:NETWORK_SET_PRIVILEGE_CHECK_RESULT_NOT_NEEDED
 *
 * 0xDF9CDAB22CD2E6EF

 * 
 * Set that the privilege check result is no longer needed. Must be done
 * before another privilege check can begin.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkSetPrivilegeCheckResultNotNeeded(): void {
	const networkSetPrivilegeCheckResultNotNeeded_result = Citizen.invokeNative<void>('0xDF9CDAB22CD2E6EF', );
	return networkSetPrivilegeCheckResultNotNeeded_result;
}