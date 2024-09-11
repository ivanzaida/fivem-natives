/**
 * MONEY:NETWORK_GET_STRING_BANK_BALANCE
 *
 * 0xCC3DCF2C80164BB7

 * 
 * ------------------------------------------------------------------
 * @returns {string}  
 */
export function networkGetStringBankBalance(): string {
	const networkGetStringBankBalance_result = Citizen.invokeNative<string>('0xCC3DCF2C80164BB7', );
	return networkGetStringBankBalance_result;
}