/**
 * NETWORK:NETWORK_SESSION_GET_HOST_AIM_PREFERENCE
 *
 * 0x672C2841CFBEC1A5

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkSessionGetHostAimPreference(): number {
	const networkSessionGetHostAimPreference_result = Citizen.invokeNative<number>('0x672C2841CFBEC1A5', );
	return networkSessionGetHostAimPreference_result;
}