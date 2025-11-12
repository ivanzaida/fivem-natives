import { EntityIndex, Vector3 } from '@ivanzaida/structures'

/**
 * ENTITY:GET_OFFSET_FROM_ENTITY_IN_WORLD_COORDS
 *
 * 0x0D1381B6E0F3987D

 * 
 * Offset values are relative to the entity.
 * 
 * x = left/right
 * y = forward/backward
 * z = up/down
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 * @returns {Vector3}  
 */
export function getOffsetFromEntityInWorldCoords(entity: EntityIndex, newCoorsX: number, newCoorsY: number, newCoorsZ: number): Vector3 {
	const getOffsetFromEntityInWorldCoords_result = Citizen.invokeNative<Vector3>('0x0D1381B6E0F3987D', entity, newCoorsX, newCoorsY, newCoorsZ);
	return getOffsetFromEntityInWorldCoords_result;
}