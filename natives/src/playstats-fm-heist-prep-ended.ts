import { FmHeistPrepEnded } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_FM_HEIST_PREP_ENDED
 *
 * 0x99328D758CDC23F7

 * 
 * ------------------------------------------------------------------
 * @param {FmHeistPrepEnded} data [Ref]
 */
export function playstatsFmHeistPrepEnded(data: FmHeistPrepEnded /* ptr */): void {
	const playstatsFmHeistPrepEnded_result = Citizen.invokeNative<void>('0x99328D758CDC23F7', data.dataView);
	return playstatsFmHeistPrepEnded_result;
}