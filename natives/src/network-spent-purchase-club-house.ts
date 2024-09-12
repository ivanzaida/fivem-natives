import { SpendClubHouse } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_PURCHASE_CLUB_HOUSE
 *
 * 0x487238BD4D444146

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpendClubHouse} data [Ref]
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentPurchaseClubHouse(amount: number, data: SpendClubHouse /* ptr */, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentPurchaseClubHouse_result = Citizen.invokeNative<void>('0x487238BD4D444146', amount, data.dataView, fromBank, fromBankAndWallet);
	return networkSpentPurchaseClubHouse_result;
}