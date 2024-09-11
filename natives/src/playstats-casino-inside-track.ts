import { Insidetrackmetric } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_CASINO_INSIDE_TRACK
 *
 * 0x4BD15CBD0A9222DD

 * 
 * ------------------------------------------------------------------
 * @param {Insidetrackmetric} data [Ref]
 */
export function playstatsCasinoInsideTrack(data: Insidetrackmetric /* ptr */): void {
	const playstatsCasinoInsideTrack_result = Citizen.invokeNative<void>('0x4BD15CBD0A9222DD', data.dataView);
	return playstatsCasinoInsideTrack_result;
}