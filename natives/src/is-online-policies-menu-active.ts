/**
 * HUD:IS_ONLINE_POLICIES_MENU_ACTIVE
 *
 * 0xEBBFE40DB22B29D2

 * 
 * Returns the same as IS_SOCIAL_CLUB_ACTIVE
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isOnlinePoliciesMenuActive(): boolean {
	const isOnlinePoliciesMenuActive_result = Citizen.invokeNative<boolean>('0xEBBFE40DB22B29D2', );
	return isOnlinePoliciesMenuActive_result;
}