import { SpentOnNightclubAndWarehouse } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_PURCHASE_NIGHTCLUB_AND_WAREHOUSE
 *
 * 0xF7449BB82D5A6055

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpentOnNightclubAndWarehouse} data [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentPurchaseNightclubAndWarehouse(amount: number, data: SpentOnNightclubAndWarehouse /* ptr */, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpentPurchaseNightclubAndWarehouse_result = Citizen.invokeNative<void>('0xF7449BB82D5A6055', amount, data.dataView, fromBank, fromBankAndWallet);
	return networkSpentPurchaseNightclubAndWarehouse_result;
}