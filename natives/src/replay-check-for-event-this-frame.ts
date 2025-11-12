/**
 * RECORDING:REPLAY_CHECK_FOR_EVENT_THIS_FRAME
 *
 * 0xECF30459397D5190

 * 
 * -This function appears to be deprecated/ unused. Tracing the call internally leads to a _nullsub -
 * 
 * first one seems to be a string of a mission name, second one seems to be a bool/toggle
 * 
 * p1 was always 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} missionName
 * @param {string} filter
 */
export function replayCheckForEventThisFrame(missionName: string, filter: string = null!): void {
	const replayCheckForEventThisFrame_result = Citizen.invokeNative<void>('0xECF30459397D5190', missionName, filter);
	return replayCheckForEventThisFrame_result;
}