/**
 * MISC:ADD_REPLAY_STAT_VALUE
 *
 * 0x9012CD429E55212A

 * 
 * ------------------------------------------------------------------
 * @param {number} valueOfStat
 */
export function addReplayStatValue(valueOfStat: number): void {
	const addReplayStatValue_result = Citizen.invokeNative<void>('0x9012CD429E55212A', valueOfStat);
	return addReplayStatValue_result;
}