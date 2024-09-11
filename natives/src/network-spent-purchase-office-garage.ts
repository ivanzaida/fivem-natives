import { SpendOfficeGarage } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_PURCHASE_OFFICE_GARAGE
 *
 * 0x6690522491F2B7EF

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpendOfficeGarage} data [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentPurchaseOfficeGarage(amount: number, data: SpendOfficeGarage /* ptr */, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentPurchaseOfficeGarage_result = Citizen.invokeNative<void>('0x6690522491F2B7EF', amount, data.dataView, fromBank, fromBankAndWallet);
	return networkSpentPurchaseOfficeGarage_result;
}