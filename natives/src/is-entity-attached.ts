import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_ATTACHED
 *
 * 0xA3736D76B0E93E93

 * 
 * Whether the entity is attached to any other entity.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityAttached(entity: EntityIndex): boolean {
	const isEntityAttached_result = Citizen.invokeNative<boolean>('0xA3736D76B0E93E93', entity);
	return isEntityAttached_result;
}