/**
 * MONEY:NETWORK_SPENT_TAXI
 *
 * 0x46B2ECD9DD5C325A

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromWalletAndBank
 * @param {number} npcProvider
 */
export function networkSpentTaxi(amount: number, fromBank: boolean = false, fromWalletAndBank: boolean = false, npcProvider: number = 0): void {
	const networkSpentTaxi_result = Citizen.invokeNative<void>('0x46B2ECD9DD5C325A', amount, fromBank, fromWalletAndBank, npcProvider);
	return networkSpentTaxi_result;
}