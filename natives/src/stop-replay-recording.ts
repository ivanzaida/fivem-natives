/**
 * RECORDING:STOP_REPLAY_RECORDING
 *
 * 0x98188EDB7446A033

 * 
 * Stops recording and saves the recorded clip.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function stopReplayRecording(): void {
	const stopReplayRecording_result = Citizen.invokeNative<void>('0x98188EDB7446A033', );
	return stopReplayRecording_result;
}