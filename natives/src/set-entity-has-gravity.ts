import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_HAS_GRAVITY
 *
 * 0xBF861D73D95BF415

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} hasGravity
 */
export function setEntityHasGravity(entity: EntityIndex, hasGravity: boolean): void {
	const setEntityHasGravity_result = Citizen.invokeNative<void>('0xBF861D73D95BF415', entity, hasGravity);
	return setEntityHasGravity_result;
}