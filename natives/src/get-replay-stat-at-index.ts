/**
 * MISC:GET_REPLAY_STAT_AT_INDEX
 *
 * 0x8BDAC9E7F4C1D9E5

 * 
 * At the start of a new session, you can call this command if the script detects that a mission replay savegame has just loaded and HAVE_REPLAY_STATS_BEEN_STORED() has returned TRUE.
 * Once you've read all the replay stats, you should trigger an autosave so that the updated stats get saved.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} array
 * @returns {number}  
 */
export function getReplayStatAtIndex(array: number): number {
	const getReplayStatAtIndex_result = Citizen.invokeNative<number>('0x8BDAC9E7F4C1D9E5', array);
	return getReplayStatAtIndex_result;
}