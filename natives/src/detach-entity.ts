import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:DETACH_ENTITY
 *
 * 0x837D67618BF89034

 * 
 * If `collision` is set to true, both entities won't collide with the other until the distance between them is above 4 meters.
 * Set `dynamic` to true to keep velocity after dettaching
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} applyVelocity
 * @param {boolean} noCollisionUntilClear
 */
export function detachEntity(entity: EntityIndex, applyVelocity: boolean = true, noCollisionUntilClear: boolean = true): void {
	const detachEntity_result = Citizen.invokeNative<void>('0x837D67618BF89034', entity, applyVelocity, noCollisionUntilClear);
	return detachEntity_result;
}