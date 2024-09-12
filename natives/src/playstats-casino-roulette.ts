import { Roulettemetric } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_CASINO_ROULETTE
 *
 * 0xED43EEB7E19CF2E3

 * 
 * ------------------------------------------------------------------
 * @param {Roulettemetric} data [Ref]
 */
export function playstatsCasinoRoulette(data: Roulettemetric /* ptr */): void {
	const playstatsCasinoRoulette_result = Citizen.invokeNative<void>('0xED43EEB7E19CF2E3', data.dataView);
	return playstatsCasinoRoulette_result;
}