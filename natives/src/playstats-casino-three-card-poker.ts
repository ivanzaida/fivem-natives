import { Threecardpokermetric } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_CASINO_THREE_CARD_POKER
 *
 * 0x5B04C6D6A21F6BDE

 * 
 * ------------------------------------------------------------------
 * @param {Threecardpokermetric} data [Ref]
 */
export function playstatsCasinoThreeCardPoker(data: Threecardpokermetric /* ptr */): void {
	const playstatsCasinoThreeCardPoker_result = Citizen.invokeNative<void>('0x5B04C6D6A21F6BDE', data.dataView);
	return playstatsCasinoThreeCardPoker_result;
}