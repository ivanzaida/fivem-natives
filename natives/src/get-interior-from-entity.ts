import { EntityIndex, InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:GET_INTERIOR_FROM_ENTITY
 *
 * 0xF8F35890F43ED2AE

 * 
 * Returns the handle of the interior that the entity is in. Returns 0 if outside.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {InteriorInstanceIndex}  
 */
export function getInteriorFromEntity(entity: EntityIndex): InteriorInstanceIndex {
	const getInteriorFromEntity_result = Citizen.invokeNative<InteriorInstanceIndex>('0xF8F35890F43ED2AE', entity);
	return getInteriorFromEntity_result;
}