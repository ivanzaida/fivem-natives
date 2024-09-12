import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_REQUEST_CONTROL_OF_NETWORK_ID
 *
 * 0x460D2A8B2C7DC7D4

 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @returns {boolean}  
 */
export function networkRequestControlOfNetworkId(networkId: NetworkIndex): boolean {
	const networkRequestControlOfNetworkId_result = Citizen.invokeNative<boolean>('0x460D2A8B2C7DC7D4', networkId);
	return networkRequestControlOfNetworkId_result;
}