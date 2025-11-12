import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:HAS_ANIM_EVENT_FIRED
 *
 * 0x5D640DD02AFD9F75

 * 
 * Use this to check if a particyular event tag is present in an animation playing on the entity this frame
 * Some events are instantaneous (so this will only return true once). Others may have duration, which means that
 * this function may continuously return true for a range of values. The event must have been tagged with the VisibleToScript attribute
 * to make it detectable with this command. Events can include one or more attributes of different types that can be used
 * to get data from the animation. To get the value of an attribute, use the GET_X_ATTRIBUTE_FROM_ANIM_EVENT commands below.
 * 
 * if (ENTITY::HAS_ANIM_EVENT_FIRED(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("CreateObject")))
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} eventHash
 * @returns {boolean}  
 */
export function hasAnimEventFired(entity: EntityIndex, eventHash: number): boolean {
	const hasAnimEventFired_result = Citizen.invokeNative<boolean>('0x5D640DD02AFD9F75', entity, eventHash);
	return hasAnimEventFired_result;
}