/**
 * STATS:PLAYSTATS_MC_KILLED_RIVAL_MC_MEMBER
 *
 * 0x9FA5724BA444B78F

 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} matchId1
 * @param {number} matchId2
 * @param {number} rpEarned
 */
export function playstatsMcKilledRivalMcMember(bossId1: number, bossId2: number, matchId1: number, matchId2: number, rpEarned: number): void {
	const playstatsMcKilledRivalMcMember_result = Citizen.invokeNative<void>('0x9FA5724BA444B78F', bossId1, bossId2, matchId1, matchId2, rpEarned);
	return playstatsMcKilledRivalMcMember_result;
}