import { SpendOfficeAndWarehouse } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_PURCHASE_IMPEXP_WAREHOUSE_PROPERTY
 *
 * 0x47CF1A8941FAF477

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpendOfficeAndWarehouse} data [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentPurchaseImpexpWarehouseProperty(amount: number, data: SpendOfficeAndWarehouse /* ptr */, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentPurchaseImpexpWarehouseProperty_result = Citizen.invokeNative<void>('0x47CF1A8941FAF477', amount, data.dataView, fromBank, fromBankAndWallet);
	return networkSpentPurchaseImpexpWarehouseProperty_result;
}