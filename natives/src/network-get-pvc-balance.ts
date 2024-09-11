/**
 * MONEY:NETWORK_GET_PVC_BALANCE
 *
 * 0xF3ABFA84F93690E0

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetPvcBalance(): number {
	const networkGetPvcBalance_result = Citizen.invokeNative<number>('0xF3ABFA84F93690E0', );
	return networkGetPvcBalance_result;
}