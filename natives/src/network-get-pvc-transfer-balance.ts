/**
 * MONEY:NETWORK_GET_PVC_TRANSFER_BALANCE
 *
 * 0xB7D5A701FD23B2B4

 * 
 * Retturns the same value as NETWORK_GET_REMAINING_TRANSFER_BALANCE.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetPvcTransferBalance(): number {
	const networkGetPvcTransferBalance_result = Citizen.invokeNative<number>('0xB7D5A701FD23B2B4', );
	return networkGetPvcTransferBalance_result;
}