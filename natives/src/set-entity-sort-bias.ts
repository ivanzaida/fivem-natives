import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_SORT_BIAS
 *
 * 0xF1E557B19688B30D

 * 
 * Set a bias to be applied to an entity's sort distance
 * 
 * Only called once in the scripts.
 * 
 * Related to weapon objects.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} bias
 */
export function setEntitySortBias(entity: EntityIndex, bias: number): void {
	const setEntitySortBias_result = Citizen.invokeNative<void>('0xF1E557B19688B30D', entity, bias);
	return setEntitySortBias_result;
}