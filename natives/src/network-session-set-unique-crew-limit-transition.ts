/**
 * NETWORK:NETWORK_SESSION_SET_UNIQUE_CREW_LIMIT_TRANSITION
 *
 * 0x93055E37701645DF

 * 
 * ------------------------------------------------------------------
 * @param {number} uniqueCrewLimit
 */
export function networkSessionSetUniqueCrewLimitTransition(uniqueCrewLimit: number): void {
	const networkSessionSetUniqueCrewLimitTransition_result = Citizen.invokeNative<void>('0x93055E37701645DF', uniqueCrewLimit);
	return networkSessionSetUniqueCrewLimitTransition_result;
}