/**
 * MONEY:NETWORK_SPENT_CINEMA
 *
 * 0x2896F1C9B1221336

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} cinemalocation
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentCinema(amount: number, cinemalocation: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentCinema_result = Citizen.invokeNative<void>('0x2896F1C9B1221336', amount, cinemalocation, fromBank, fromBankAndWallet);
	return networkSpentCinema_result;
}