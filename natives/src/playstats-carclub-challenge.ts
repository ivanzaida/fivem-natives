/**
 * STATS:PLAYSTATS_CARCLUB_CHALLENGE
 *
 * 0xCC5FFCD1D8510D21

 * 
 * ------------------------------------------------------------------
 * @param {number} missionName
 * @param {number} numGoalsCompleted
 * @param {number} numGoalsRequired
 * @param {number} memberLevel
 */
export function playstatsCarclubChallenge(missionName: number, numGoalsCompleted: number, numGoalsRequired: number, memberLevel: number): void {
	const playstatsCarclubChallenge_result = Citizen.invokeNative<void>('0xCC5FFCD1D8510D21', missionName, numGoalsCompleted, numGoalsRequired, memberLevel);
	return playstatsCarclubChallenge_result;
}