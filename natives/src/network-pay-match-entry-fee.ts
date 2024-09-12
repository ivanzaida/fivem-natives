/**
 * MONEY:NETWORK_PAY_MATCH_ENTRY_FEE
 *
 * 0x1BF8BBFBF0066C79

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {string} uniqueMatchId
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkPayMatchEntryFee(amount: number, uniqueMatchId: string, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkPayMatchEntryFee_result = Citizen.invokeNative<void>('0x1BF8BBFBF0066C79', amount, uniqueMatchId, fromBank, fromBankAndWallet);
	return networkPayMatchEntryFee_result;
}