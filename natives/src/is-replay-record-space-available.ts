/**
 * RECORDING:IS_REPLAY_RECORD_SPACE_AVAILABLE
 *
 * 0x37E75188C827C483

 * 
 * Returns true if there is enough space to record a replay
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} showWarning If true, will displayed a warning message if disk space is low or empty.
 * @returns {boolean}  
 */
export function isReplayRecordSpaceAvailable(showWarning: boolean = false): boolean {
	const isReplayRecordSpaceAvailable_result = Citizen.invokeNative<boolean>('0x37E75188C827C483', showWarning);
	return isReplayRecordSpaceAvailable_result;
}