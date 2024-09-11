import { Casinometriclight } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_CASINO_ROULETTE_LIGHT
 *
 * 0x7B03AA631D3DC516

 * 
 * ------------------------------------------------------------------
 * @param {Casinometriclight} data [Ref]
 */
export function playstatsCasinoRouletteLight(data: Casinometriclight /* ptr */): void {
	const playstatsCasinoRouletteLight_result = Citizen.invokeNative<void>('0x7B03AA631D3DC516', data.dataView);
	return playstatsCasinoRouletteLight_result;
}