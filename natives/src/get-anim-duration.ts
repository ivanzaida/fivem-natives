/**
 * ENTITY:GET_ANIM_DURATION
 *
 * 0x6CEF2D1ADD6A5E7F

 * 
 * Unlike GET_ENTITY_ANIM_TOTAL_TIME above, the anim does not need to be playing on an entity. However, you
 * must load the anim dictionary prior to calling this, or the command will assert.
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} animDictName
 * @param {string} animName
 * @returns {number}  
 */
export function getAnimDuration(animDictName: string, animName: string): number {
	const getAnimDuration_result = Citizen.invokeNative<number>('0x6CEF2D1ADD6A5E7F', animDictName, animName);
	return getAnimDuration_result;
}