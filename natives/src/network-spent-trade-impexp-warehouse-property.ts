import { SpendBusinessProperty } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_TRADE_IMPEXP_WAREHOUSE_PROPERTY
 *
 * 0x997FC0391BB433D7

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpendBusinessProperty} data [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentTradeImpexpWarehouseProperty(amount: number, data: SpendBusinessProperty /* ptr */, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentTradeImpexpWarehouseProperty_result = Citizen.invokeNative<void>('0x997FC0391BB433D7', amount, data.dataView, fromBank, fromBankAndWallet);
	return networkSpentTradeImpexpWarehouseProperty_result;
}