/**
 * MONEY:NETWORK_GET_STRING_WALLET_BALANCE
 *
 * 0x815E568EDFA0F84F

 * 
 * ------------------------------------------------------------------
 * @param {number} character
 * @returns {string}  
 */
export function networkGetStringWalletBalance(character: number = 1): string {
	const networkGetStringWalletBalance_result = Citizen.invokeNative<string>('0x815E568EDFA0F84F', character);
	return networkGetStringWalletBalance_result;
}