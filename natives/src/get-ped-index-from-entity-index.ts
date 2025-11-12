import { EntityIndex, PedIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_PED_INDEX_FROM_ENTITY_INDEX
 *
 * 0xBD545F8729E9F413

 * 
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {PedIndex}  
 */
export function getPedIndexFromEntityIndex(entity: EntityIndex): PedIndex {
	const getPedIndexFromEntityIndex_result = Citizen.invokeNative<PedIndex>('0xBD545F8729E9F413', entity);
	return getPedIndexFromEntityIndex_result;
}