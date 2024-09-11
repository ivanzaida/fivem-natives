import { Casinometriclight } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_CASINO_THREE_CARD_POKER_LIGHT
 *
 * 0x9908830BDC036C61

 * 
 * ------------------------------------------------------------------
 * @param {Casinometriclight} data [Ref]
 */
export function playstatsCasinoThreeCardPokerLight(data: Casinometriclight /* ptr */): void {
	const playstatsCasinoThreeCardPokerLight_result = Citizen.invokeNative<void>('0x9908830BDC036C61', data.dataView);
	return playstatsCasinoThreeCardPokerLight_result;
}