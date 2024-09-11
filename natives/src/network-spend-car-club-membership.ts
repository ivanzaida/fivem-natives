import { EMembershipPurchaseMethod } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPEND_CAR_CLUB_MEMBERSHIP
 *
 * 0x3D20F4EE16939AC2

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} carClubAmount
 * @param {EMembershipPurchaseMethod} purchaseMethod
 */
export function networkSpendCarClubMembership(amount: number, fromBank: boolean, fromBankAndWallet: boolean, carClubAmount: number, purchaseMethod: EMembershipPurchaseMethod | number): void {
	const networkSpendCarClubMembership_result = Citizen.invokeNative<void>('0x3D20F4EE16939AC2', amount, fromBank, fromBankAndWallet, carClubAmount, purchaseMethod);
	return networkSpendCarClubMembership_result;
}