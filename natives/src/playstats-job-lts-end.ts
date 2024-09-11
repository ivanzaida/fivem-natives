import { JobLtsInfo } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_JOB_LTS_END
 *
 * 0xA65F85EADA8FCE58

 * 
 * ------------------------------------------------------------------
 * @param {string} creator
 * @param {string} matchId
 * @param {JobLtsInfo} info [Ref]
 * @param {string} playlistid
 */
export function playstatsJobLtsEnd(creator: string, matchId: string, info: JobLtsInfo /* ptr */, playlistid: string): void {
	const playstatsJobLtsEnd_result = Citizen.invokeNative<void>('0xA65F85EADA8FCE58', creator, matchId, info.dataView, playlistid);
	return playstatsJobLtsEnd_result;
}