import { Luckysevenmetric } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_CASINO_LUCKY_SEVEN
 *
 * 0xCDD1396DEA43BDA8

 * 
 * ------------------------------------------------------------------
 * @param {Luckysevenmetric} data [Ref]
 */
export function playstatsCasinoLuckySeven(data: Luckysevenmetric /* ptr */): void {
	const playstatsCasinoLuckySeven_result = Citizen.invokeNative<void>('0xCDD1396DEA43BDA8', data.dataView);
	return playstatsCasinoLuckySeven_result;
}