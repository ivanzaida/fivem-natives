/**
 * STATS:PLAYSTATS_MC_CLUBHOUSE_ACTIVITY
 *
 * 0x9C9F041189C7B5E6

 * 
 * Telemetry sent whenever any of the actvity events finishes (Darts, Arm Wrestling, Drinking, Smoking, Jukebox)
 * If not a jukebox activity, jukeboxStation should be set to -1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} matchId1
 * @param {number} matchId2
 * @param {number} minigameType
 * @param {number} jukeboxStation
 * @param {number} mcPointsEarned
 */
export function playstatsMcClubhouseActivity(bossId1: number, bossId2: number, matchId1: number, matchId2: number, minigameType: number, jukeboxStation: number, mcPointsEarned: number): void {
	const playstatsMcClubhouseActivity_result = Citizen.invokeNative<void>('0x9C9F041189C7B5E6', bossId1, bossId2, matchId1, matchId2, minigameType, jukeboxStation, mcPointsEarned);
	return playstatsMcClubhouseActivity_result;
}