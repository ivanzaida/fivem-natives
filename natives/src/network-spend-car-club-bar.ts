/**
 * MONEY:NETWORK_SPEND_CAR_CLUB_BAR
 *
 * 0xF3C2DA93952477BC

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} carClubAmount
 */
export function networkSpendCarClubBar(amount: number, fromBank: boolean, fromBankAndWallet: boolean, carClubAmount: number): void {
	const networkSpendCarClubBar_result = Citizen.invokeNative<void>('0xF3C2DA93952477BC', amount, fromBank, fromBankAndWallet, carClubAmount);
	return networkSpendCarClubBar_result;
}