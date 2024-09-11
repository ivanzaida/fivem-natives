/**
 * STATS:PLAYSTATS_EARNED_MC_POINTS
 *
 * 0x038FC0304403CC66

 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} matchId1
 * @param {number} matchId2
 * @param {number} method
 * @param {number} amount
 */
export function playstatsEarnedMcPoints(bossId1: number, bossId2: number, matchId1: number, matchId2: number, method: number, amount: number): void {
	const playstatsEarnedMcPoints_result = Citizen.invokeNative<void>('0x038FC0304403CC66', bossId1, bossId2, matchId1, matchId2, method, amount);
	return playstatsEarnedMcPoints_result;
}