/**
 * MONEY:NETWORK_SPEND_EARNED_FROM_BANK_AND_WALLETS
 *
 * 0xD97AF335F8ACDB0F

 * 
 * Hardcoded to return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @returns {number}  
 */
export function networkSpendEarnedFromBankAndWallets(amount: number): number {
	const networkSpendEarnedFromBankAndWallets_result = Citizen.invokeNative<number>('0xD97AF335F8ACDB0F', amount);
	return networkSpendEarnedFromBankAndWallets_result;
}