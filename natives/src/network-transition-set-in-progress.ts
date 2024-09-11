/**
 * NETWORK:NETWORK_TRANSITION_SET_IN_PROGRESS
 *
 * 0x378AFFC55A6E480C

 * 
 * ------------------------------------------------------------------
 * @param {boolean} inProgress
 */
export function networkTransitionSetInProgress(inProgress: boolean): void {
	const networkTransitionSetInProgress_result = Citizen.invokeNative<void>('0x378AFFC55A6E480C', inProgress);
	return networkTransitionSetInProgress_result;
}