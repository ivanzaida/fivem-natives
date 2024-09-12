/**
 * NETWORK:NETWORK_SESSION_SET_UNIQUE_CREW_LIMIT
 *
 * 0xC2FDE8BF0797A991

 * 
 * ------------------------------------------------------------------
 * @param {number} uniqueCrewLimit
 */
export function networkSessionSetUniqueCrewLimit(uniqueCrewLimit: number): void {
	const networkSessionSetUniqueCrewLimit_result = Citizen.invokeNative<void>('0xC2FDE8BF0797A991', uniqueCrewLimit);
	return networkSessionSetUniqueCrewLimit_result;
}