import { SpendOfficeAndWarehouse } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_UPGRADE_OFFICE_PROPERTY
 *
 * 0xF703ED783A4823FC

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpendOfficeAndWarehouse} data [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentUpgradeOfficeProperty(amount: number, data: SpendOfficeAndWarehouse /* ptr */, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentUpgradeOfficeProperty_result = Citizen.invokeNative<void>('0xF703ED783A4823FC', amount, data.dataView, fromBank, fromBankAndWallet);
	return networkSpentUpgradeOfficeProperty_result;
}