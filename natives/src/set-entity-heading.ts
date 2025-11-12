import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_HEADING
 *
 * 0x5C96CEA06531AB03

 * 
 * Set the heading of an entity in degrees also known as "Yaw".
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} newHeading
 */
export function setEntityHeading(entity: EntityIndex, newHeading: number): void {
	const setEntityHeading_result = Citizen.invokeNative<void>('0x5C96CEA06531AB03', entity, newHeading);
	return setEntityHeading_result;
}