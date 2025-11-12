/**
 * NETWORK:NETWORK_IS_HOST
 *
 * 0x7242220B378B8CCF

 * 
 * If you are host, returns true else returns false.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsHost(): boolean {
	const networkIsHost_result = Citizen.invokeNative<boolean>('0x7242220B378B8CCF', );
	return networkIsHost_result;
}