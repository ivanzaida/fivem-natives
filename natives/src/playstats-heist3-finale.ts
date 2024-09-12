import { Heist3Finale } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_HEIST3_FINALE
 *
 * 0xB48B26002E1AA60A

 * 
 * ------------------------------------------------------------------
 * @param {Heist3Finale} data [Ref]
 */
export function playstatsHeist3Finale(data: Heist3Finale /* ptr */): void {
	const playstatsHeist3Finale_result = Citizen.invokeNative<void>('0xB48B26002E1AA60A', data.dataView);
	return playstatsHeist3Finale_result;
}