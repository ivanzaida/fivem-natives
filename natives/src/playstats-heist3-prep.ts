import { Heist3Prep } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_HEIST3_PREP
 *
 * 0x40072633F87B9108

 * 
 * ------------------------------------------------------------------
 * @param {Heist3Prep} data [Ref]
 */
export function playstatsHeist3Prep(data: Heist3Prep /* ptr */): void {
	const playstatsHeist3Prep_result = Citizen.invokeNative<void>('0x40072633F87B9108', data.dataView);
	return playstatsHeist3Prep_result;
}