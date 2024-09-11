/**
 * MONEY:NETWORK_SPENT_BETTING
 *
 * 0xEFA7F7BEF6727E05

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} bettype
 * @param {string} uniqueMatchId
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentBetting(amount: number, bettype: number, uniqueMatchId: string, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentBetting_result = Citizen.invokeNative<void>('0xEFA7F7BEF6727E05', amount, bettype, uniqueMatchId, fromBank, fromBankAndWallet);
	return networkSpentBetting_result;
}