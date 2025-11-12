/**
 * MONEY:NETWORK_GET_CAN_SPEND_FROM_BANK_AND_WALLET
 *
 * 0x818CFAC7819E0460

 * 
 * Returns true if bank balance + wallet balance >= amount.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} character
 * @returns {boolean}  
 */
export function networkGetCanSpendFromBankAndWallet(amount: number, character: number = 1): boolean {
	const networkGetCanSpendFromBankAndWallet_result = Citizen.invokeNative<boolean>('0x818CFAC7819E0460', amount, character);
	return networkGetCanSpendFromBankAndWallet_result;
}