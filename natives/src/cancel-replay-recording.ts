/**
 * RECORDING:CANCEL_REPLAY_RECORDING
 *
 * 0x9A7045411AC5794F

 * 
 * Stops recording and discards the recorded clip.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function cancelReplayRecording(): void {
	const cancelReplayRecording_result = Citizen.invokeNative<void>('0x9A7045411AC5794F', );
	return cancelReplayRecording_result;
}