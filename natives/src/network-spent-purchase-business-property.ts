import { SpendBusinessProperty } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_PURCHASE_BUSINESS_PROPERTY
 *
 * 0x7C551A8AD8F364D6

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpendBusinessProperty} data [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentPurchaseBusinessProperty(amount: number, data: SpendBusinessProperty /* ptr */, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentPurchaseBusinessProperty_result = Citizen.invokeNative<void>('0x7C551A8AD8F364D6', amount, data.dataView, fromBank, fromBankAndWallet);
	return networkSpentPurchaseBusinessProperty_result;
}