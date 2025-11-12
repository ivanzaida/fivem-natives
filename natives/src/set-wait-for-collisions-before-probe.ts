import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_WAIT_FOR_COLLISIONS_BEFORE_PROBE
 *
 * 0x5A91FB116578FE09

 * 
 * Set flag to indicate if generated as part of user content
 * 
 * Only called within 1 script for x360. 'fm_mission_controller' and it used on an object.
 * 
 * Ran after these 2 natives,
 * set_object_targettable(uParam0, 0);
 * set_entity_invincible(uParam0, 1);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} wait
 */
export function setWaitForCollisionsBeforeProbe(entity: EntityIndex, wait: boolean): void {
	const setWaitForCollisionsBeforeProbe_result = Citizen.invokeNative<void>('0x5A91FB116578FE09', entity, wait);
	return setWaitForCollisionsBeforeProbe_result;
}