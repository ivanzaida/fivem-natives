import { NetworkIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_ENTITY_FROM_NETWORK_ID
 *
 * 0x2D1D65495AECC04F

 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @returns {EntityIndex}  
 */
export function networkGetEntityFromNetworkId(networkId: NetworkIndex): EntityIndex {
	const networkGetEntityFromNetworkId_result = Citizen.invokeNative<EntityIndex>('0x2D1D65495AECC04F', networkId);
	return networkGetEntityFromNetworkId_result;
}