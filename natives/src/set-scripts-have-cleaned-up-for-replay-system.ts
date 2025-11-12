/**
 * REPLAY:SET_SCRIPTS_HAVE_CLEANED_UP_FOR_REPLAY_SYSTEM
 *
 * 0x952F7C7A0CC86DA0

 * 
 * Disables some other rendering (internal)
 * 
 * 
 * ------------------------------------------------------------------
 */
export function setScriptsHaveCleanedUpForReplaySystem(): void {
	const setScriptsHaveCleanedUpForReplaySystem_result = Citizen.invokeNative<void>('0x952F7C7A0CC86DA0', );
	return setScriptsHaveCleanedUpForReplaySystem_result;
}