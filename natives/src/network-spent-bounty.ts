/**
 * MONEY:NETWORK_SPENT_BOUNTY
 *
 * 0x2A073933B945C84D

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentBounty(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentBounty_result = Citizen.invokeNative<void>('0x2A073933B945C84D', amount, fromBank, fromBankAndWallet);
	return networkSpentBounty_result;
}