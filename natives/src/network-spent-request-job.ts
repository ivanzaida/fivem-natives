/**
 * MONEY:NETWORK_SPENT_REQUEST_JOB
 *
 * 0x473E72253CC49698

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} npcProvider
 */
export function networkSpentRequestJob(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false, npcProvider: number = 0): void {
	const networkSpentRequestJob_result = Citizen.invokeNative<void>('0x473E72253CC49698', amount, fromBank, fromBankAndWallet, npcProvider);
	return networkSpentRequestJob_result;
}