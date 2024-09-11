import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_DOES_ENTITY_EXIST_WITH_NETWORK_ID
 *
 * 0x93BF17E19A9F0E9B

 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @returns {boolean}  
 */
export function networkDoesEntityExistWithNetworkId(networkId: NetworkIndex): boolean {
	const networkDoesEntityExistWithNetworkId_result = Citizen.invokeNative<boolean>('0x93BF17E19A9F0E9B', networkId);
	return networkDoesEntityExistWithNetworkId_result;
}