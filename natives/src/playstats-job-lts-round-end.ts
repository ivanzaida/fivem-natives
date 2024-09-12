import { JobLtsRoundInfo } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_JOB_LTS_ROUND_END
 *
 * 0x8B363F1214B75578

 * 
 * ------------------------------------------------------------------
 * @param {string} creator
 * @param {string} matchId
 * @param {JobLtsRoundInfo} info [Ref]
 * @param {string} playlistid
 */
export function playstatsJobLtsRoundEnd(creator: string, matchId: string, info: JobLtsRoundInfo /* ptr */, playlistid: string): void {
	const playstatsJobLtsRoundEnd_result = Citizen.invokeNative<void>('0x8B363F1214B75578', creator, matchId, info.dataView, playlistid);
	return playstatsJobLtsRoundEnd_result;
}