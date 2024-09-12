import { CasinoStoryMissionEnded } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_CASINO_STORY_MISSION_ENDED
 *
 * 0x46A8E0CD89EA583B

 * 
 * ------------------------------------------------------------------
 * @param {CasinoStoryMissionEnded} data [Ref]
 * @param {string} matchId
 */
export function playstatsCasinoStoryMissionEnded(data: CasinoStoryMissionEnded /* ptr */, matchId: string): void {
	const playstatsCasinoStoryMissionEnded_result = Citizen.invokeNative<void>('0x46A8E0CD89EA583B', data.dataView, matchId);
	return playstatsCasinoStoryMissionEnded_result;
}