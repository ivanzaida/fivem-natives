import { EntityIndex, Vector3 } from '@ivanzaida/structures'

/**
 * ENTITY:GET_OFFSET_FROM_ENTITY_GIVEN_WORLD_COORDS
 *
 * 0xAD8278DAEC2CC059

 * 
 * Converts world coords (posX - Z) to coords relative to the entity
 * 
 * Example:
 * posX is given as 50
 * entity's x coord is 40
 * the returned x coord will then be 10 or -10, not sure haven't used this in a while (think it is 10 though).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} worldCoorsX
 * @param {number} worldCoorsY
 * @param {number} worldCoorsZ
 * @returns {Vector3}  
 */
export function getOffsetFromEntityGivenWorldCoords(entity: EntityIndex, worldCoorsX: number, worldCoorsY: number, worldCoorsZ: number): Vector3 {
	const getOffsetFromEntityGivenWorldCoords_result = Citizen.invokeNative<Vector3>('0xAD8278DAEC2CC059', entity, worldCoorsX, worldCoorsY, worldCoorsZ);
	return getOffsetFromEntityGivenWorldCoords_result;
}