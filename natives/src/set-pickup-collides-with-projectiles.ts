import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_PICKUP_COLLIDES_WITH_PROJECTILES
 *
 * 0xD28214FC77C81F2E

 * 
 * Sets whether a pickup will collide with projectiles.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} collideWithProjectiles
 */
export function setPickupCollidesWithProjectiles(entity: EntityIndex, collideWithProjectiles: boolean): void {
	const setPickupCollidesWithProjectiles_result = Citizen.invokeNative<void>('0xD28214FC77C81F2E', entity, collideWithProjectiles);
	return setPickupCollidesWithProjectiles_result;
}