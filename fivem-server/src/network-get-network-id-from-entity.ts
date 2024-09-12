import { EntityIndex, NetworkIndex } from '@ivanzaida/structures'

/**
 * CFX:NETWORK_GET_NETWORK_ID_FROM_ENTITY
 *
 * 0x9E35DAB6

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {NetworkIndex}  
 */
export function networkGetNetworkIdFromEntity(entity: EntityIndex): NetworkIndex {
	const networkGetNetworkIdFromEntity_result = Citizen.invokeNative<NetworkIndex>('0x9E35DAB6', entity);
	return networkGetNetworkIdFromEntity_result;
}