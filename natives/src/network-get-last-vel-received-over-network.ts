import { EntityIndex, Vector3 } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_LAST_VEL_RECEIVED_OVER_NETWORK
 *
 * 0x21D6FED3EFEC33E5

 * 
 * Returns the last received velocity of a clone entity. Don't use it on local entities
 * 
 * Used by NetBlender
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {Vector3}  
 */
export function networkGetLastVelReceivedOverNetwork(entity: EntityIndex): Vector3 {
	const networkGetLastVelReceivedOverNetwork_result = Citizen.invokeNative<Vector3>('0x21D6FED3EFEC33E5', entity);
	return networkGetLastVelReceivedOverNetwork_result;
}