/**
 * MONEY:NETWORK_GET_VC_BANK_BALANCE
 *
 * 0x227D0C27EB51D76C

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetVcBankBalance(): number {
	const networkGetVcBankBalance_result = Citizen.invokeNative<number>('0x227D0C27EB51D76C', );
	return networkGetVcBankBalance_result;
}