/**
 * MONEY:NETWORK_GET_VC_BALANCE
 *
 * 0x6A9B427B35077684

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetVcBalance(): number {
	const networkGetVcBalance_result = Citizen.invokeNative<number>('0x6A9B427B35077684', );
	return networkGetVcBalance_result;
}