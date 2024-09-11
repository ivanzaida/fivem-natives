import { SpendOfficeAndWarehouse } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_UPGRADE_WAREHOUSE_PROPERTY
 *
 * 0xD387AD5F69E5AED7

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpendOfficeAndWarehouse} data [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentUpgradeWarehouseProperty(amount: number, data: SpendOfficeAndWarehouse /* ptr */, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentUpgradeWarehouseProperty_result = Citizen.invokeNative<void>('0xD387AD5F69E5AED7', amount, data.dataView, fromBank, fromBankAndWallet);
	return networkSpentUpgradeWarehouseProperty_result;
}