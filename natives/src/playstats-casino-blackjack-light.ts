import { Blackjackmetriclight } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_CASINO_BLACKJACK_LIGHT
 *
 * 0xD905BB02623EB466

 * 
 * ------------------------------------------------------------------
 * @param {Blackjackmetriclight} data [Ref]
 */
export function playstatsCasinoBlackjackLight(data: Blackjackmetriclight /* ptr */): void {
	const playstatsCasinoBlackjackLight_result = Citizen.invokeNative<void>('0xD905BB02623EB466', data.dataView);
	return playstatsCasinoBlackjackLight_result;
}