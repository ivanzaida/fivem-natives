/**
 * NETWORK:NETWORK_ARE_SOCIAL_CLUB_POLICIES_CURRENT
 *
 * 0xEBF44C5F6EF789C0

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkAreSocialClubPoliciesCurrent(): boolean {
	const networkAreSocialClubPoliciesCurrent_result = Citizen.invokeNative<boolean>('0xEBF44C5F6EF789C0', );
	return networkAreSocialClubPoliciesCurrent_result;
}