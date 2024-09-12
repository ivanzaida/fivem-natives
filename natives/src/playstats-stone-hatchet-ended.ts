import { StoneHatchetEnd } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_STONE_HATCHET_ENDED
 *
 * 0xF0B9CB44987DE499

 * 
 * ------------------------------------------------------------------
 * @param {StoneHatchetEnd} data [Ref]
 */
export function playstatsStoneHatchetEnded(data: StoneHatchetEnd /* ptr */): void {
	const playstatsStoneHatchetEnded_result = Citizen.invokeNative<void>('0xF0B9CB44987DE499', data.dataView);
	return playstatsStoneHatchetEnded_result;
}