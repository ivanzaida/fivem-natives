/**
 * RECORDING:IS_REPLAY_INITIALIZED
 *
 * 0x85CC9F47ACE575F1

 * 
 * Returns true if the replay system is ready to be used.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isReplayInitialized(): boolean {
	const isReplayInitialized_result = Citizen.invokeNative<boolean>('0x85CC9F47ACE575F1', );
	return isReplayInitialized_result;
}