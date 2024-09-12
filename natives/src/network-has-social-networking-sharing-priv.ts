/**
 * NETWORK:NETWORK_HAS_SOCIAL_NETWORKING_SHARING_PRIV
 *
 * 0xADED703C1F8CC52B

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHasSocialNetworkingSharingPriv(): boolean {
	const networkHasSocialNetworkingSharingPriv_result = Citizen.invokeNative<boolean>('0xADED703C1F8CC52B', );
	return networkHasSocialNetworkingSharingPriv_result;
}