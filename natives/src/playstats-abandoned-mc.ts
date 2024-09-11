/**
 * STATS:PLAYSTATS_ABANDONED_MC
 *
 * 0x386D5FB82562D9A7

 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} matchId1
 * @param {number} matchId2
 * @param {number} abandonedMc
 */
export function playstatsAbandonedMc(bossId1: number, bossId2: number, matchId1: number, matchId2: number, abandonedMc: number): void {
	const playstatsAbandonedMc_result = Citizen.invokeNative<void>('0x386D5FB82562D9A7', bossId1, bossId2, matchId1, matchId2, abandonedMc);
	return playstatsAbandonedMc_result;
}