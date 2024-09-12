import { EntityIndex, NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_NETWORK_ID_FROM_ENTITY
 *
 * 0xEDC5724006650308

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {NetworkIndex}  
 */
export function networkGetNetworkIdFromEntity(entity: EntityIndex): NetworkIndex {
	const networkGetNetworkIdFromEntity_result = Citizen.invokeNative<NetworkIndex>('0xEDC5724006650308', entity);
	return networkGetNetworkIdFromEntity_result;
}