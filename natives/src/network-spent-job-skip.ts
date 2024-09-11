/**
 * MONEY:NETWORK_SPENT_JOB_SKIP
 *
 * 0xE6BD97EF8B376DAC

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {string} uniqueMatchId
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentJobSkip(amount: number, uniqueMatchId: string, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentJobSkip_result = Citizen.invokeNative<void>('0xE6BD97EF8B376DAC', amount, uniqueMatchId, fromBank, fromBankAndWallet);
	return networkSpentJobSkip_result;
}