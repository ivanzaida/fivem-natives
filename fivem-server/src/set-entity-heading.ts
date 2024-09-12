import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_ENTITY_HEADING
 *
 * 0XE0FF064D

 * Set the heading of an entity in degrees also known as "Yaw".
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} newHeading
 */
export function setEntityHeading(entity: EntityIndex, newHeading: number): void {
	const setEntityHeading_result = Citizen.invokeNative<void>('0XE0FF064D', entity, newHeading);
	return setEntityHeading_result;
}