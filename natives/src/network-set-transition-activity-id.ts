/**
 * NETWORK:NETWORK_SET_TRANSITION_ACTIVITY_ID
 *
 * 0x55EB8BA1CE3E5D52

 * 
 * ------------------------------------------------------------------
 * @param {number} activityID
 */
export function networkSetTransitionActivityId(activityID: number): void {
	const networkSetTransitionActivityId_result = Citizen.invokeNative<void>('0x55EB8BA1CE3E5D52', activityID);
	return networkSetTransitionActivityId_result;
}