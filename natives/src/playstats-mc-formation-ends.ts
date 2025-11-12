/**
 * STATS:PLAYSTATS_MC_FORMATION_ENDS
 *
 * 0xAAEAC50F94519B77

 * 
 * Telemetry sent when formation ENDS
 * formationStyle - formation Style
 * duration - how long formation lasted on the road
 * membersAmount - Max number of MC members involved
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} matchId1
 * @param {number} matchId2
 * @param {number} formationStyle
 * @param {number} duration
 * @param {number} membersAmount
 */
export function playstatsMcFormationEnds(bossId1: number, bossId2: number, matchId1: number, matchId2: number, formationStyle: number, duration: number, membersAmount: number): void {
	const playstatsMcFormationEnds_result = Citizen.invokeNative<void>('0xAAEAC50F94519B77', bossId1, bossId2, matchId1, matchId2, formationStyle, duration, membersAmount);
	return playstatsMcFormationEnds_result;
}