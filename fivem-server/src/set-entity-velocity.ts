import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_ENTITY_VELOCITY
 *
 * 0XFF5A1988

 * The speeds are measured in metres per second.
 * Note that the third parameter(denoted as z) is "up and down" with positive numbers encouraging upwards movement.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} velocityComponenttX
 * @param {number} velocityComponenttY
 * @param {number} velocityComponenttZ
 */
export function setEntityVelocity(entity: EntityIndex, velocityComponenttX: number, velocityComponenttY: number, velocityComponenttZ: number): void {
	const setEntityVelocity_result = Citizen.invokeNative<void>('0XFF5A1988', entity, velocityComponenttX, velocityComponenttY, velocityComponenttZ);
	return setEntityVelocity_result;
}