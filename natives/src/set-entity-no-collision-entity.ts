import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_NO_COLLISION_ENTITY
 *
 * 0x015E1BBD4DB33542

 * 
 * Prevents the first entity from colliding with the second entity
 * 
 * Calling this function disables collision between two entities.
 * The importance of the order for entity1 and entity2 is unclear.
 * The third parameter, `thisFrame`, decides whether the collision is to be disabled until it is turned back on, or if it's just this frame.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {EntityIndex} secondEntity
 * @param {boolean} reactivateWhenNoCollision
 */
export function setEntityNoCollisionEntity(entity: EntityIndex, secondEntity: EntityIndex, reactivateWhenNoCollision: boolean): void {
	const setEntityNoCollisionEntity_result = Citizen.invokeNative<void>('0x015E1BBD4DB33542', entity, secondEntity, reactivateWhenNoCollision);
	return setEntityNoCollisionEntity_result;
}