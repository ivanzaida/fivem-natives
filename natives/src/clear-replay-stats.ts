/**
 * MISC:CLEAR_REPLAY_STATS
 *
 * 0x4BB54FF089A08B44

 * 
 * ------------------------------------------------------------------
 */
export function clearReplayStats(): void {
	const clearReplayStats_result = Citizen.invokeNative<void>('0x4BB54FF089A08B44', );
	return clearReplayStats_result;
}