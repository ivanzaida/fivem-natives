import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_MAX_SPEED
 *
 * 0xB4E9A7A3A518ECC1

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} maxSpeed
 */
export function setEntityMaxSpeed(entity: EntityIndex, maxSpeed: number): void {
	const setEntityMaxSpeed_result = Citizen.invokeNative<void>('0xB4E9A7A3A518ECC1', entity, maxSpeed);
	return setEntityMaxSpeed_result;
}