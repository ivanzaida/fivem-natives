import { SpendBusinessProperty } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_TRADE_BUSINESS_PROPERTY
 *
 * 0x6B149894691C7CC8

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpendBusinessProperty} data [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentTradeBusinessProperty(amount: number, data: SpendBusinessProperty /* ptr */, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentTradeBusinessProperty_result = Citizen.invokeNative<void>('0x6B149894691C7CC8', amount, data.dataView, fromBank, fromBankAndWallet);
	return networkSpentTradeBusinessProperty_result;
}