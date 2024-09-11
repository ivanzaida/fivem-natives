/**
 * STATS:PLAYSTATS_CHANGE_MC_OUTFIT
 *
 * 0x4A3EF58902440342

 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} matchId1
 * @param {number} matchId2
 * @param {number} outfit
 */
export function playstatsChangeMcOutfit(bossId1: number, bossId2: number, matchId1: number, matchId2: number, outfit: number): void {
	const playstatsChangeMcOutfit_result = Citizen.invokeNative<void>('0x4A3EF58902440342', bossId1, bossId2, matchId1, matchId2, outfit);
	return playstatsChangeMcOutfit_result;
}