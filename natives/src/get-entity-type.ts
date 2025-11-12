import { EntityIndex, EEntityType } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_TYPE
 *
 * 0x75A2D1BBA9D95D0E

 * 
 * Returns:
 * 0 = no entity
 * 1 = ped
 * 2 = vehicle
 * 3 = object
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {EEntityType}  
 */
export function getEntityType(entity: EntityIndex): EEntityType {
	const getEntityType_result = Citizen.invokeNative<EEntityType>('0x75A2D1BBA9D95D0E', entity);
	return getEntityType_result;
}