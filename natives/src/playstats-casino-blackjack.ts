import { Blackjackmetric } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_CASINO_BLACKJACK
 *
 * 0xD2C8AF03369DD71B

 * 
 * ------------------------------------------------------------------
 * @param {Blackjackmetric} data [Ref]
 */
export function playstatsCasinoBlackjack(data: Blackjackmetric /* ptr */): void {
	const playstatsCasinoBlackjack_result = Citizen.invokeNative<void>('0xD2C8AF03369DD71B', data.dataView);
	return playstatsCasinoBlackjack_result;
}