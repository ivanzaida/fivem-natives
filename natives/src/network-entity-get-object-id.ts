import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ENTITY_GET_OBJECT_ID
 *
 * 0x71698F8AAB574CF7

 * 
 * Returns the network object ID (the code id) of a entity.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {number}  
 */
export function networkEntityGetObjectId(entity: EntityIndex): number {
	const networkEntityGetObjectId_result = Citizen.invokeNative<number>('0x71698F8AAB574CF7', entity);
	return networkEntityGetObjectId_result;
}