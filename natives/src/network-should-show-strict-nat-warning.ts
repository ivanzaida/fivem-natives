/**
 * NETWORK:NETWORK_SHOULD_SHOW_STRICT_NAT_WARNING
 *
 * 0x17739C59E555C46D

 * 
 * Returns true if the NAT type is Strict (3) and a certain number of connections have failed.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkShouldShowStrictNatWarning(): boolean {
	const networkShouldShowStrictNatWarning_result = Citizen.invokeNative<boolean>('0x17739C59E555C46D', );
	return networkShouldShowStrictNatWarning_result;
}