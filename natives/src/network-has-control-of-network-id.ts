import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HAS_CONTROL_OF_NETWORK_ID
 *
 * 0xEADBDBE0422CF7E6

 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @returns {boolean}  
 */
export function networkHasControlOfNetworkId(networkId: NetworkIndex): boolean {
	const networkHasControlOfNetworkId_result = Citizen.invokeNative<boolean>('0xEADBDBE0422CF7E6', networkId);
	return networkHasControlOfNetworkId_result;
}