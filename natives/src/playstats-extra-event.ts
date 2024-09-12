import { ExtraEvent } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_EXTRA_EVENT
 *
 * 0xF629F308639591F4

 * 
 * ------------------------------------------------------------------
 * @param {ExtraEvent} data [Ref]
 */
export function playstatsExtraEvent(data: ExtraEvent /* ptr */): void {
	const playstatsExtraEvent_result = Citizen.invokeNative<void>('0xF629F308639591F4', data.dataView);
	return playstatsExtraEvent_result;
}