/**
 * NETWORK:NETWORK_SESSION_SET_CREW_LIMIT_MAX_MEMBERS_TRANSITION
 *
 * 0x748527CDF8982E12

 * 
 * ------------------------------------------------------------------
 * @param {number} maxCrewMembers
 */
export function networkSessionSetCrewLimitMaxMembersTransition(maxCrewMembers: number): void {
	const networkSessionSetCrewLimitMaxMembersTransition_result = Citizen.invokeNative<void>('0x748527CDF8982E12', maxCrewMembers);
	return networkSessionSetCrewLimitMaxMembersTransition_result;
}