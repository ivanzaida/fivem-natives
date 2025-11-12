/**
 * MONEY:NETWORK_GET_CAN_SPEND_FROM_BANK
 *
 * 0x33B9AE76A0E4C46D

 * 
 * Returns true if bank balance >= amount.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @returns {boolean}  
 */
export function networkGetCanSpendFromBank(amount: number): boolean {
	const networkGetCanSpendFromBank_result = Citizen.invokeNative<boolean>('0x33B9AE76A0E4C46D', amount);
	return networkGetCanSpendFromBank_result;
}