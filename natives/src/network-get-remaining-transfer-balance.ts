/**
 * MONEY:NETWORK_GET_REMAINING_TRANSFER_BALANCE
 *
 * 0xCAA7ED3DA3EAD53C

 * 
 * Returns the same value as NETWORK_GET_PVC_TRANSFER_BALANCE.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetRemainingTransferBalance(): number {
	const networkGetRemainingTransferBalance_result = Citizen.invokeNative<number>('0xCAA7ED3DA3EAD53C', );
	return networkGetRemainingTransferBalance_result;
}