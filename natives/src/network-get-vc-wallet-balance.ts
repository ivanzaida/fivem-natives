/**
 * MONEY:NETWORK_GET_VC_WALLET_BALANCE
 *
 * 0x00BDC89742B13CD2

 * 
 * ------------------------------------------------------------------
 * @param {number} character
 * @returns {number}  
 */
export function networkGetVcWalletBalance(character: number = 1): number {
	const networkGetVcWalletBalance_result = Citizen.invokeNative<number>('0x00BDC89742B13CD2', character);
	return networkGetVcWalletBalance_result;
}