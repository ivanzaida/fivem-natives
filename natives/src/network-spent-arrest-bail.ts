/**
 * MONEY:NETWORK_SPENT_ARREST_BAIL
 *
 * 0x5ED8FA0BD19D1554

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentArrestBail(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentArrestBail_result = Citizen.invokeNative<void>('0x5ED8FA0BD19D1554', amount, fromBank, fromBankAndWallet);
	return networkSpentArrestBail_result;
}