import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_HEADING
 *
 * 0xCFC0C995455A6204

 * 
 * Gets the entity's heading in degrees. If the entity is a ped in a vehicle, then the heading of the
 * vehicle is returned;
 * 
 * Returns the heading of the entity in degrees. Also know as the "Yaw" of an entity.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {number}  
 */
export function getEntityHeading(entity: EntityIndex): number {
	const getEntityHeading_result = Citizen.invokeNative<number>('0xCFC0C995455A6204', entity);
	return getEntityHeading_result;
}