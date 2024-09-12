/**
 * NETWORK:NETWORK_SET_IN_PROGRESS_FINISH_TIME
 *
 * 0x4E0E12D39BE69892

 * 
 * ------------------------------------------------------------------
 * @param {number} inProgressFinishTime
 */
export function networkSetInProgressFinishTime(inProgressFinishTime: number): void {
	const networkSetInProgressFinishTime_result = Citizen.invokeNative<void>('0x4E0E12D39BE69892', inProgressFinishTime);
	return networkSetInProgressFinishTime_result;
}