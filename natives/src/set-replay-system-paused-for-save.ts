/**
 * REPLAY:SET_REPLAY_SYSTEM_PAUSED_FOR_SAVE
 *
 * 0x41C6C46BCEFF9949

 * 
 * After REPLAY_SYSTEM_HAS_REQUESTED_A_SCRIPT_CLEANUP() returns TRUE for the first time, the replay code gives the scripts a few seconds to clean up before it clears the world.
 * To store Director Mode settings, the scripts may need to trigger an autosave.
 * Call SET_REPLAY_SYSTEM_PAUSED_FOR_SAVE(TRUE) once before triggering the autosave to prevent the replay code from timing out in the middle of the autosave.
 * Be sure to call SET_REPLAY_SYSTEM_PAUSED_FOR_SAVE(FALSE) after the autosave has finished.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} paused
 */
export function setReplaySystemPausedForSave(paused: boolean): void {
	const setReplaySystemPausedForSave_result = Citizen.invokeNative<void>('0x41C6C46BCEFF9949', paused);
	return setReplaySystemPausedForSave_result;
}