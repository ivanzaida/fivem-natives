/**
 * MONEY:NETWORK_SPENT_REQUEST_HEIST
 *
 * 0xBB8D17D4C5954DAD

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} npcProvider
 */
export function networkSpentRequestHeist(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false, npcProvider: number = 0): void {
	const networkSpentRequestHeist_result = Citizen.invokeNative<void>('0xBB8D17D4C5954DAD', amount, fromBank, fromBankAndWallet, npcProvider);
	return networkSpentRequestHeist_result;
}