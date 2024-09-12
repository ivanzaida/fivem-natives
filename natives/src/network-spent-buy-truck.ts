import { SpentOnTruck } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_BUY_TRUCK
 *
 * 0xA813D964741A08C1

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {SpentOnTruck} data [Ref]
 */
export function networkSpentBuyTruck(amount: number, fromBank: boolean, fromBankAndWallet: boolean, data: SpentOnTruck /* ptr */): void {
	const networkSpentBuyTruck_result = Citizen.invokeNative<void>('0xA813D964741A08C1', amount, fromBank, fromBankAndWallet, data.dataView);
	return networkSpentBuyTruck_result;
}