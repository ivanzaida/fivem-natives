/**
 * MONEY:NETWORK_GET_CAN_SPEND_FROM_WALLET
 *
 * 0x2CCC9874DC774FD1

 * 
 * Returns true if wallet balance >= amount.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} character
 * @returns {boolean}  
 */
export function networkGetCanSpendFromWallet(amount: number, character: number = 1): boolean {
	const networkGetCanSpendFromWallet_result = Citizen.invokeNative<boolean>('0x2CCC9874DC774FD1', amount, character);
	return networkGetCanSpendFromWallet_result;
}