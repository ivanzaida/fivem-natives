/**
 * MONEY:NETWORK_GET_EVC_BALANCE
 *
 * 0xF9A874A9AA3CA007

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetEvcBalance(): number {
	const networkGetEvcBalance_result = Citizen.invokeNative<number>('0xF9A874A9AA3CA007', );
	return networkGetEvcBalance_result;
}