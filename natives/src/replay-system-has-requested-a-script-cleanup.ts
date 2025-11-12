/**
 * REPLAY:REPLAY_SYSTEM_HAS_REQUESTED_A_SCRIPT_CLEANUP
 *
 * 0xD5FD8DD00FB16F99

 * 
 * Before the replay system can play back a clip, it requires all scripts to clean up.
 * Call this command every frame in a script such as main.sc
 * When the command returns TRUE, can you start a cleanup routine similar to that done at the beginning of a mission repeat
 * 
 * Returns a bool if interior rendering is disabled, if yes, all "normal" rendered interiors are invisible
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function replaySystemHasRequestedAScriptCleanup(): boolean {
	const replaySystemHasRequestedAScriptCleanup_result = Citizen.invokeNative<boolean>('0xD5FD8DD00FB16F99', );
	return replaySystemHasRequestedAScriptCleanup_result;
}