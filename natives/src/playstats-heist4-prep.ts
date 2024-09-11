import { Heist4Prep } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_HEIST4_PREP
 *
 * 0xB0BAD388315F2608

 * 
 * ------------------------------------------------------------------
 * @param {Heist4Prep} data [Ref]
 */
export function playstatsHeist4Prep(data: Heist4Prep /* ptr */): void {
	const playstatsHeist4Prep_result = Citizen.invokeNative<void>('0xB0BAD388315F2608', data.dataView);
	return playstatsHeist4Prep_result;
}