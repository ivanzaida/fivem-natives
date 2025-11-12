import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:FORCE_ENTITY_AI_AND_ANIMATION_UPDATE
 *
 * 0x2B2ECB6F6371E59E

 * 
 * Forces the entities ai and animation to be processed again this frame. This command is expensive and must be used sparingly!
 * Its primary purpose is to update entity animations immediately on the first frame of a scripted cut scene (where a camera cut is being used).
 * 
 * Based on carmod_shop script decompile this takes a vehicle parameter. It is called when repair is done on initial enter.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function forceEntityAiAndAnimationUpdate(entity: EntityIndex): void {
	const forceEntityAiAndAnimationUpdate_result = Citizen.invokeNative<void>('0x2B2ECB6F6371E59E', entity);
	return forceEntityAiAndAnimationUpdate_result;
}