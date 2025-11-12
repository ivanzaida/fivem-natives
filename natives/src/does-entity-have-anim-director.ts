import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:DOES_ENTITY_HAVE_ANIM_DIRECTOR
 *
 * 0x14A90D05363A2A09

 * 
 * HAS_ANIM_EVENT_FIRED requires the entity to have an anim director. You can use this command
 * to check that the entity has an anim director before calling that command.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function doesEntityHaveAnimDirector(entity: EntityIndex): boolean {
	const doesEntityHaveAnimDirector_result = Citizen.invokeNative<boolean>('0x14A90D05363A2A09', entity);
	return doesEntityHaveAnimDirector_result;
}