import { EntityIndex, EEntityType } from '@ivanzaida/structures'

/**
 * CFX:GET_ENTITY_TYPE
 *
 * 0xB1BD08D

 * 
 * Returns:
 * 0 = no entity
 * 1 = ped
 * 2 = vehicle
 * 3 = object
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity The entity to get the type of.
 * @returns {EEntityType}  
 */
export function getEntityType(entity: EntityIndex): EEntityType {
	const getEntityType_result = Citizen.invokeNative<EEntityType>('0xB1BD08D', entity);
	return getEntityType_result;
}