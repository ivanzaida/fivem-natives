import { SpendOfficeAndWarehouse } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_PURCHASE_OFFICE_PROPERTY
 *
 * 0xE56907D742FBB98E

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpendOfficeAndWarehouse} data [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentPurchaseOfficeProperty(amount: number, data: SpendOfficeAndWarehouse /* ptr */, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentPurchaseOfficeProperty_result = Citizen.invokeNative<void>('0xE56907D742FBB98E', amount, data.dataView, fromBank, fromBankAndWallet);
	return networkSpentPurchaseOfficeProperty_result;
}