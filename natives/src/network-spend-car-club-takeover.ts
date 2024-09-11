/**
 * MONEY:NETWORK_SPEND_CAR_CLUB_TAKEOVER
 *
 * 0x883A1BCBA56D5FBD

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} carClubAmount
 */
export function networkSpendCarClubTakeover(amount: number, fromBank: boolean, fromBankAndWallet: boolean, carClubAmount: number): void {
	const networkSpendCarClubTakeover_result = Citizen.invokeNative<void>('0x883A1BCBA56D5FBD', amount, fromBank, fromBankAndWallet, carClubAmount);
	return networkSpendCarClubTakeover_result;
}