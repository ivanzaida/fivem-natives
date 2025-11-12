import { EntityIndex, ObjectIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_OBJECT_INDEX_FROM_ENTITY_INDEX
 *
 * 0x0646D07BB2D516CD

 * 
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {ObjectIndex}  
 */
export function getObjectIndexFromEntityIndex(entity: EntityIndex): ObjectIndex {
	const getObjectIndexFromEntityIndex_result = Citizen.invokeNative<ObjectIndex>('0x0646D07BB2D516CD', entity);
	return getObjectIndexFromEntityIndex_result;
}