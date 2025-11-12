import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_ANGULAR_VELOCITY
 *
 * 0x7B6B10D7260C93CF

 * 
 * The ang speeds are measured in degrees ( in radians ) per frame.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} velocityComponenttX
 * @param {number} velocityComponenttY
 * @param {number} velocityComponenttZ
 */
export function setEntityAngularVelocity(entity: EntityIndex, velocityComponenttX: number, velocityComponenttY: number, velocityComponenttZ: number): void {
	const setEntityAngularVelocity_result = Citizen.invokeNative<void>('0x7B6B10D7260C93CF', entity, velocityComponenttX, velocityComponenttY, velocityComponenttZ);
	return setEntityAngularVelocity_result;
}