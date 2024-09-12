/**
 * STATS:PLAYSTATS_RANK_UP
 *
 * 0xC9F6D856F39266AF

 * 
 * ------------------------------------------------------------------
 * @param {number} rank
 */
export function playstatsRankUp(rank: number): void {
	const playstatsRankUp_result = Citizen.invokeNative<void>('0xC9F6D856F39266AF', rank);
	return playstatsRankUp_result;
}