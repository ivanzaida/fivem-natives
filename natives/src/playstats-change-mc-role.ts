/**
 * STATS:PLAYSTATS_CHANGE_MC_ROLE
 *
 * 0xCA4490F4B172921A

 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} matchId1
 * @param {number} matchId2
 * @param {number} previousRole
 * @param {number} newRole
 * @param {number} mcPoint
 */
export function playstatsChangeMcRole(bossId1: number, bossId2: number, matchId1: number, matchId2: number, previousRole: number, newRole: number, mcPoint: number): void {
	const playstatsChangeMcRole_result = Citizen.invokeNative<void>('0xCA4490F4B172921A', bossId1, bossId2, matchId1, matchId2, previousRole, newRole, mcPoint);
	return playstatsChangeMcRole_result;
}