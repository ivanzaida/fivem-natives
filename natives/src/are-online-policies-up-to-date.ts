/**
 * HUD:ARE_ONLINE_POLICIES_UP_TO_DATE
 *
 * 0xDD3EE6E5E154DB78

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function areOnlinePoliciesUpToDate(): boolean {
	const areOnlinePoliciesUpToDate_result = Citizen.invokeNative<boolean>('0xDD3EE6E5E154DB78', );
	return areOnlinePoliciesUpToDate_result;
}