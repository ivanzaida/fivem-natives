import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_HEIGHT_ABOVE_GROUND
 *
 * 0x2399A6E4929050EE

 * 
 * Return height (z-dimension) above ground.
 * Example: The pilot in a titan plane is 1.844176 above ground.
 * 
 * How can i convert it to meters?
 * Everything seems to be in meters, probably this too.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {number}  
 */
export function getEntityHeightAboveGround(entity: EntityIndex): number {
	const getEntityHeightAboveGround_result = Citizen.invokeNative<number>('0x2399A6E4929050EE', entity);
	return getEntityHeightAboveGround_result;
}