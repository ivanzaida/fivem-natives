import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_NETWORK_ID_REMOTELY_CONTROLLED
 *
 * 0x5766C800B3721367

 * 
 * Returns true if the specified network id is controlled by someone else.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @returns {boolean}  
 */
export function networkIsNetworkIdRemotelyControlled(networkId: NetworkIndex): boolean {
	const networkIsNetworkIdRemotelyControlled_result = Citizen.invokeNative<boolean>('0x5766C800B3721367', networkId);
	return networkIsNetworkIdRemotelyControlled_result;
}