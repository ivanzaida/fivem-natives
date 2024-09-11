/**
 * MISC:HAVE_REPLAY_STATS_BEEN_STORED
 *
 * 0x90168A0DE18A7F1A

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function haveReplayStatsBeenStored(): boolean {
	const haveReplayStatsBeenStored_result = Citizen.invokeNative<boolean>('0x90168A0DE18A7F1A', );
	return haveReplayStatsBeenStored_result;
}