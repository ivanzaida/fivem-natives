import { SpentOnNightclubAndWarehouse } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_UPGRADE_NIGHTCLUB_AND_WAREHOUSE
 *
 * 0x4CA2FD73CB528330

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpentOnNightclubAndWarehouse} data [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentUpgradeNightclubAndWarehouse(amount: number, data: SpentOnNightclubAndWarehouse /* ptr */, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpentUpgradeNightclubAndWarehouse_result = Citizen.invokeNative<void>('0x4CA2FD73CB528330', amount, data.dataView, fromBank, fromBankAndWallet);
	return networkSpentUpgradeNightclubAndWarehouse_result;
}