import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_OCCLUDED
 *
 * 0xF6C26AE940C14749

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityOccluded(entity: EntityIndex): boolean {
	const isEntityOccluded_result = Citizen.invokeNative<boolean>('0xF6C26AE940C14749', entity);
	return isEntityOccluded_result;
}