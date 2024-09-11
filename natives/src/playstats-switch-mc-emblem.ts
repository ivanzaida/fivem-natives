/**
 * STATS:PLAYSTATS_SWITCH_MC_EMBLEM
 *
 * 0x659F4E947AD2B02A

 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} matchId1
 * @param {number} matchId2
 * @param {number} emblem
 */
export function playstatsSwitchMcEmblem(bossId1: number, bossId2: number, matchId1: number, matchId2: number, emblem: number): void {
	const playstatsSwitchMcEmblem_result = Citizen.invokeNative<void>('0x659F4E947AD2B02A', bossId1, bossId2, matchId1, matchId2, emblem);
	return playstatsSwitchMcEmblem_result;
}