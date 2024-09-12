/**
 * MONEY:NETWORK_SPENT_BANK_INTEREST
 *
 * 0x91F514ABD264DE39

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentBankInterest(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentBankInterest_result = Citizen.invokeNative<void>('0x91F514ABD264DE39', amount, fromBank, fromBankAndWallet);
	return networkSpentBankInterest_result;
}