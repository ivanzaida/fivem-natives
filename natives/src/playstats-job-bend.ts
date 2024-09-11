import { JobBInfo } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_JOB_BEND
 *
 * 0x791C60FDE763B02C

 * 
 * ------------------------------------------------------------------
 * @param {string} creator
 * @param {string} matchId
 * @param {JobBInfo} info [Ref]
 * @param {string} playlistid
 */
export function playstatsJobBend(creator: string, matchId: string, info: JobBInfo /* ptr */, playlistid: string): void {
	const playstatsJobBend_result = Citizen.invokeNative<void>('0x791C60FDE763B02C', creator, matchId, info.dataView, playlistid);
	return playstatsJobBend_result;
}