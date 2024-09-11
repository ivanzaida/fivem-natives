/**
 * NETWORK:NETWORK_SESSION_IS_SOLO
 *
 * 0xDC8C0439F5CD3C85

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkSessionIsSolo(): boolean {
	const networkSessionIsSolo_result = Citizen.invokeNative<boolean>('0xDC8C0439F5CD3C85', );
	return networkSessionIsSolo_result;
}