/**
 * MONEY:NETWORK_SPENT_EMPLOY_ASSASSINS
 *
 * 0xD22ED94E238E6212

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} level
 */
export function networkSpentEmployAssassins(amount: number, fromBank: boolean, fromBankAndWallet: boolean, level: number): void {
	const networkSpentEmployAssassins_result = Citizen.invokeNative<void>('0xD22ED94E238E6212', amount, fromBank, fromBankAndWallet, level);
	return networkSpentEmployAssassins_result;
}