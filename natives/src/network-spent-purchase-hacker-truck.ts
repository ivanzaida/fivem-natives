import { SpentOnHackerTruck } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_PURCHASE_HACKER_TRUCK
 *
 * 0xCCC74177BFE27AC9

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpentOnHackerTruck} data [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentPurchaseHackerTruck(amount: number, data: SpentOnHackerTruck /* ptr */, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpentPurchaseHackerTruck_result = Citizen.invokeNative<void>('0xCCC74177BFE27AC9', amount, data.dataView, fromBank, fromBankAndWallet);
	return networkSpentPurchaseHackerTruck_result;
}