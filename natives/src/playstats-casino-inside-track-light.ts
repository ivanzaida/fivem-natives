import { Insidetrackmetriclight } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_CASINO_INSIDE_TRACK_LIGHT
 *
 * 0x7B2248C7C15BE57A

 * 
 * ------------------------------------------------------------------
 * @param {Insidetrackmetriclight} data [Ref]
 */
export function playstatsCasinoInsideTrackLight(data: Insidetrackmetriclight /* ptr */): void {
	const playstatsCasinoInsideTrackLight_result = Citizen.invokeNative<void>('0x7B2248C7C15BE57A', data.dataView);
	return playstatsCasinoInsideTrackLight_result;
}