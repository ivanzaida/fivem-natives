/**
 * STATS:STAT_RESET_ALL_ONLINE_CHARACTER_STATS
 *
 * 0xC4FBBBC915C04DF9

 * Reset multiplayer stats (start with string "MP") that are prefixed by a certain number (MP0 to MP4)
 * Reset Perfixes are:
 * - MP0_   -> perfix is 0
 * - MP1_   -> perfix is 1
 * - MP2_   -> perfix is 2
 * - MP3_   -> perfix is 3
 * - MPPLY_ -> perfix is 5
 * - MPGEN_ -> perfix is 6
 * - All the other stats have a perfix 7 which is the default perfix value.
 * p0 seems to range from 0 to 7
 * 
 * ------------------------------------------------------------------
 * @param {number} prefix
 */
export function statResetAllOnlineCharacterStats(prefix: number): void {
	const statResetAllOnlineCharacterStats_result = Citizen.invokeNative<void>('0xC4FBBBC915C04DF9', prefix);
	return statResetAllOnlineCharacterStats_result;
}