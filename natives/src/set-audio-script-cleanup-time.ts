/**
 * AUDIO:SET_AUDIO_SCRIPT_CLEANUP_TIME
 *
 * 0x0D7BAEA1C3D6BDB6

 * 
 * ------------------------------------------------------------------
 * @param {number} timeDelay
 */
export function setAudioScriptCleanupTime(timeDelay: number): void {
	const setAudioScriptCleanupTime_result = Citizen.invokeNative<void>('0x0D7BAEA1C3D6BDB6', timeDelay);
	return setAudioScriptCleanupTime_result;
}