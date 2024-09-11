/**
 * HUD:OPEN_ONLINE_POLICIES_MENU
 *
 * 0xCC1642C4C1CE902A

 * 
 * ------------------------------------------------------------------
 */
export function openOnlinePoliciesMenu(): void {
	const openOnlinePoliciesMenu_result = Citizen.invokeNative<void>('0xCC1642C4C1CE902A', );
	return openOnlinePoliciesMenu_result;
}