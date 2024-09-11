import { SpendBusinessProperty } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_UPGRADE_BUSINESS_PROPERTY
 *
 * 0x96861731FED0B20F

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpendBusinessProperty} data [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentUpgradeBusinessProperty(amount: number, data: SpendBusinessProperty /* ptr */, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentUpgradeBusinessProperty_result = Citizen.invokeNative<void>('0x96861731FED0B20F', amount, data.dataView, fromBank, fromBankAndWallet);
	return networkSpentUpgradeBusinessProperty_result;
}