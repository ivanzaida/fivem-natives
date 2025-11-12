import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:HAS_ENTITY_COLLIDED_WITH_ANYTHING
 *
 * 0x14E25ED5E75102C8

 * 
 * Called on tick.
 * Tested with vehicles, returns true whenever the vehicle is touching any entity.
 * 
 * Note: for vehicles, the wheels can touch the ground and it will still return false, but if the body of the vehicle touches the ground, it will return true.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function hasEntityCollidedWithAnything(entity: EntityIndex): boolean {
	const hasEntityCollidedWithAnything_result = Citizen.invokeNative<boolean>('0x14E25ED5E75102C8', entity);
	return hasEntityCollidedWithAnything_result;
}