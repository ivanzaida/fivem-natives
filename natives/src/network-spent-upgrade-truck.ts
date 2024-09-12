import { SpentOnTruck } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_UPGRADE_TRUCK
 *
 * 0x2119E194E1B27356

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {SpentOnTruck} data [Ref]
 */
export function networkSpentUpgradeTruck(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: SpentOnTruck /* ptr */): void {
	const networkSpentUpgradeTruck_result = Citizen.invokeNative<void>('0x2119E194E1B27356', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpentUpgradeTruck_result;
}