import { SpendOfficeAndWarehouse } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_PURCHASE_WAREHOUSE_PROPERTY
 *
 * 0x81817FDF3227FB55

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpendOfficeAndWarehouse} data [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentPurchaseWarehouseProperty(amount: number, data: SpendOfficeAndWarehouse /* ptr */, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentPurchaseWarehouseProperty_result = Citizen.invokeNative<void>('0x81817FDF3227FB55', amount, data.dataView, fromBank, fromBankAndWallet);
	return networkSpentPurchaseWarehouseProperty_result;
}