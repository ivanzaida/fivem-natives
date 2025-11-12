import { EntityIndex, Vector3 } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_LAST_ENTITY_POS_RECEIVED_OVER_NETWORK
 *
 * 0x4D867CF71882EEA6

 * 
 * Returns the last position for this entity received over the network (Note: This may be different to where the entity is on the local machine currently)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {Vector3}  
 */
export function networkGetLastEntityPosReceivedOverNetwork(entity: EntityIndex): Vector3 {
	const networkGetLastEntityPosReceivedOverNetwork_result = Citizen.invokeNative<Vector3>('0x4D867CF71882EEA6', entity);
	return networkGetLastEntityPosReceivedOverNetwork_result;
}