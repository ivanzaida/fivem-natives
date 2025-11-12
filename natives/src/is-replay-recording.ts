/**
 * RECORDING:IS_REPLAY_RECORDING
 *
 * 0xE7585CE3CDD6F47E

 * 
 * Checks if you're recording, returns TRUE when you start recording (F1) or turn on action replay (F2)
 * 
 * mov al, cs:g_bIsRecordingGameplay // byte_141DD0CD0 in b944
 * retn
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isReplayRecording(): boolean {
	const isReplayRecording_result = Citizen.invokeNative<boolean>('0xE7585CE3CDD6F47E', );
	return isReplayRecording_result;
}