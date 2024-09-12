/**
 * STATS:PLAYSTATS_QUIT_MODE
 *
 * 0x41D32B3516729590

 * 
 * ------------------------------------------------------------------
 * @param {number} missionType
 * @param {string} mid
 * @param {number} players
 * @param {number} duration
 * @param {boolean} voteDiff
 */
export function playstatsQuitMode(missionType: number, mid: string, players: number, duration: number, voteDiff: boolean): void {
	const playstatsQuitMode_result = Citizen.invokeNative<void>('0x41D32B3516729590', missionType, mid, players, duration, voteDiff);
	return playstatsQuitMode_result;
}