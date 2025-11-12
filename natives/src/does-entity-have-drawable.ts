import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:DOES_ENTITY_HAVE_DRAWABLE
 *
 * 0xF98CC1C0E657B6CB

 * 
 * PLAY_ENTITY_ANIM and PLAY_SYNCHRONIZED_ENTITY_ANIM require the entity to have a drawable. You can use this command
 * to check that the entity has a drawable before attempting to play the anim.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function doesEntityHaveDrawable(entity: EntityIndex): boolean {
	const doesEntityHaveDrawable_result = Citizen.invokeNative<boolean>('0xF98CC1C0E657B6CB', entity);
	return doesEntityHaveDrawable_result;
}