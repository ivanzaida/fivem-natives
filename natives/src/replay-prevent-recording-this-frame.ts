/**
 * RECORDING:REPLAY_PREVENT_RECORDING_THIS_FRAME
 *
 * 0xC0964AABD3C0CC7E

 * 
 * This disable the recording feature and has to be called every frame.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function replayPreventRecordingThisFrame(): void {
	const replayPreventRecordingThisFrame_result = Citizen.invokeNative<void>('0xC0964AABD3C0CC7E', );
	return replayPreventRecordingThisFrame_result;
}