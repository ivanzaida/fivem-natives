import { Heist4Finale } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_HEIST4_FINALE
 *
 * 0xBA1BC83D99F914EB

 * 
 * ------------------------------------------------------------------
 * @param {Heist4Finale} data [Ref]
 */
export function playstatsHeist4Finale(data: Heist4Finale /* ptr */): void {
	const playstatsHeist4Finale_result = Citizen.invokeNative<void>('0xBA1BC83D99F914EB', data.dataView);
	return playstatsHeist4Finale_result;
}