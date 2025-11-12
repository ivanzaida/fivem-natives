import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_ENTITY_HEADING
 *
 * 0xE0FF064D

 * 
 * Set the heading of an entity in degrees also known as "Yaw".
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity The entity to set the heading for.
 * @param {number} heading The heading in degrees.
 */
export function setEntityHeading(entity: EntityIndex, heading: number): void {
	const setEntityHeading_result = Citizen.invokeNative<void>('0xE0FF064D', entity, heading);
	return setEntityHeading_result;
}