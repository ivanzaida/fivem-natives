import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_ON_SCREEN
 *
 * 0xCB5CAFF0A4A8B74B

 * 
 * THIS COMMAND DOESN'T TAKE GEOMETRY INTO CONSIDERATION!
 * 
 * Returns true if the entity is in between the minimum and maximum values for the 2d screen coords.
 * This means that it will return true even if the entity is behind a wall for example, as long as you're looking at their location.
 * Chipping
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityOnScreen(entity: EntityIndex): boolean {
	const isEntityOnScreen_result = Citizen.invokeNative<boolean>('0xCB5CAFF0A4A8B74B', entity);
	return isEntityOnScreen_result;
}