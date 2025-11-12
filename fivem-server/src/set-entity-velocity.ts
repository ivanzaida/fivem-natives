import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_ENTITY_VELOCITY
 *
 * 0xFF5A1988

 * 
 * The speeds are measured in metres per second.
 * 
 * Note that the third parameter(denoted as z) is "up and down" with positive numbers encouraging upwards movement.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} x
 * @param {number} y
 * @param {number} z
 */
export function setEntityVelocity(entity: EntityIndex, x: number, y: number, z: number): void {
	const setEntityVelocity_result = Citizen.invokeNative<void>('0xFF5A1988', entity, x, y, z);
	return setEntityVelocity_result;
}