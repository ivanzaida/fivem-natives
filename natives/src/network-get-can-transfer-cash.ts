/**
 * MONEY:NETWORK_GET_CAN_TRANSFER_CASH
 *
 * 0xDF1F519EA0B54B7D

 * 
 * Returns false if amount > wallet balance or daily transfer limit has been hit.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @returns {boolean}  
 */
export function networkGetCanTransferCash(amount: number): boolean {
	const networkGetCanTransferCash_result = Citizen.invokeNative<boolean>('0xDF1F519EA0B54B7D', amount);
	return networkGetCanTransferCash_result;
}