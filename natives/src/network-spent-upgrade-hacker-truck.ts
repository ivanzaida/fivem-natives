import { SpentOnHackerTruck } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_UPGRADE_HACKER_TRUCK
 *
 * 0xA93B2B393E4AAA20

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpentOnHackerTruck} data [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentUpgradeHackerTruck(amount: number, data: SpentOnHackerTruck /* ptr */, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpentUpgradeHackerTruck_result = Citizen.invokeNative<void>('0xA93B2B393E4AAA20', amount, data.dataView, fromBank, fromBankAndWallet);
	return networkSpentUpgradeHackerTruck_result;
}