import { NetworkIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:NETWORK_GET_ENTITY_FROM_NETWORK_ID
 *
 * 0X5B912C3F

 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @returns {EntityIndex}  
 */
export function networkGetEntityFromNetworkId(networkId: NetworkIndex): EntityIndex {
	const networkGetEntityFromNetworkId_result = Citizen.invokeNative<EntityIndex>('0X5B912C3F', networkId);
	return networkGetEntityFromNetworkId_result;
}