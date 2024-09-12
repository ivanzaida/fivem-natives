import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:NETWORK_GET_ENTITY_FROM_NETWORK_ID
 *
 * 0x5B912C3F

 * 
 * ------------------------------------------------------------------
 * @param {number} netId
 * @returns {EntityIndex}  
 */
export function networkGetEntityFromNetworkId(netId: number): EntityIndex {
	const networkGetEntityFromNetworkId_result = Citizen.invokeNative<EntityIndex>('0x5B912C3F', netId);
	return networkGetEntityFromNetworkId_result;
}