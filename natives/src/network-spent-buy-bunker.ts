import { SpentOnBunker } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_BUY_BUNKER
 *
 * 0x0D31BD6FE1E51499

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {SpentOnBunker} data [Ref]
 */
export function networkSpentBuyBunker(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: SpentOnBunker /* ptr */): void {
	const networkSpentBuyBunker_result = Citizen.invokeNative<void>('0x0D31BD6FE1E51499', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpentBuyBunker_result;
}