import { JobActivityInfo } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_JOB_ACTIVITY_END
 *
 * 0x7701647A03967883

 * 
 * ------------------------------------------------------------------
 * @param {string} creator
 * @param {string} matchId
 * @param {JobActivityInfo} info [Ref]
 * @param {string} playlistid
 */
export function playstatsJobActivityEnd(creator: string, matchId: string, info: JobActivityInfo /* ptr */, playlistid: string): void {
	const playstatsJobActivityEnd_result = Citizen.invokeNative<void>('0x7701647A03967883', creator, matchId, info.dataView, playlistid);
	return playstatsJobActivityEnd_result;
}