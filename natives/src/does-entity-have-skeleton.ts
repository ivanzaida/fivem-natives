import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:DOES_ENTITY_HAVE_SKELETON
 *
 * 0x3D4B0DBFA0E78D88

 * 
 * HAS_ANIM_EVENT_FIRED requires the entity to have a skeleton. You can use this command
 * to check that the entity has a skeleton before calling that command.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function doesEntityHaveSkeleton(entity: EntityIndex): boolean {
	const doesEntityHaveSkeleton_result = Citizen.invokeNative<boolean>('0x3D4B0DBFA0E78D88', entity);
	return doesEntityHaveSkeleton_result;
}