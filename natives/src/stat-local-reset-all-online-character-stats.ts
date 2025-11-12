/**
 * STATS:STAT_LOCAL_RESET_ALL_ONLINE_CHARACTER_STATS
 *
 * 0xB9BE1957DDE28FC8

 * 
 * p0 seems to range from 0 to 7
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} prefix
 */
export function statLocalResetAllOnlineCharacterStats(prefix: number): void {
	const statLocalResetAllOnlineCharacterStats_result = Citizen.invokeNative<void>('0xB9BE1957DDE28FC8', prefix);
	return statLocalResetAllOnlineCharacterStats_result;
}