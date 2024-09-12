import { SpendOfficeAndWarehouse } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_UPGRADE_IMPEXP_WAREHOUSE_PROPERTY
 *
 * 0xC190A01717631220

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpendOfficeAndWarehouse} data [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentUpgradeImpexpWarehouseProperty(amount: number, data: SpendOfficeAndWarehouse /* ptr */, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentUpgradeImpexpWarehouseProperty_result = Citizen.invokeNative<void>('0xC190A01717631220', amount, data.dataView, fromBank, fromBankAndWallet);
	return networkSpentUpgradeImpexpWarehouseProperty_result;
}