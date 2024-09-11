/**
 * NETWORK:NETWORK_SESSION_IS_VISIBLE
 *
 * 0x6887ED8BDFBE2715

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkSessionIsVisible(): boolean {
	const networkSessionIsVisible_result = Citizen.invokeNative<boolean>('0x6887ED8BDFBE2715', );
	return networkSessionIsVisible_result;
}