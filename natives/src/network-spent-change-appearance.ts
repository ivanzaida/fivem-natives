/**
 * MONEY:NETWORK_SPENT_CHANGE_APPEARANCE
 *
 * 0xE9B35F4B3FA183CC

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentChangeAppearance(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentChangeAppearance_result = Citizen.invokeNative<void>('0xE9B35F4B3FA183CC', amount, fromBank, fromBankAndWallet);
	return networkSpentChangeAppearance_result;
}