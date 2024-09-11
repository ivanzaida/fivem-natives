/**
 * MONEY:NETWORK_GET_STRING_BANK_WALLET_BALANCE
 *
 * 0xFA33924AB598C47C

 * 
 * ------------------------------------------------------------------
 * @param {number} character
 * @returns {string}  
 */
export function networkGetStringBankWalletBalance(character: number = 1): string {
	const networkGetStringBankWalletBalance_result = Citizen.invokeNative<string>('0xFA33924AB598C47C', character);
	return networkGetStringBankWalletBalance_result;
}