import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_VISIBLE
 *
 * 0xE5E2AE8B19267B8A

 * 
 * Checks if an entity's IS_VISIBLE flag is set, i.e. whether it's being explicitly hidden (by code or script) or not.
 * Note that this function returns true for all entities that have their IS_VISIBLE flag set,
 * even those that aren't actually visible from the current camera (i.e. they are outside
 * the view frustum or behind occluders).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityVisible(entity: EntityIndex): boolean {
	const isEntityVisible_result = Citizen.invokeNative<boolean>('0xE5E2AE8B19267B8A', entity);
	return isEntityVisible_result;
}