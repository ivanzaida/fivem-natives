/**
 * RECORDING:SAVE_REPLAY_RECORDING
 *
 * 0x6CD6A4BE55F8343E

 * 
 * Saves out the current buffer up until that last time a save was called
 * Returns true if a clip has been marked for save,
 * Returns false if the clip that was being saved is less then the minimum length
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function saveReplayRecording(): boolean {
	const saveReplayRecording_result = Citizen.invokeNative<boolean>('0x6CD6A4BE55F8343E', );
	return saveReplayRecording_result;
}