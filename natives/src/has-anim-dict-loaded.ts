/**
 * STREAMING:HAS_ANIM_DICT_LOADED
 *
 * 0xE100DD4F82A51BDE

 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} animDictionaryName
 * @returns {boolean}  
 */
export function hasAnimDictLoaded(animDictionaryName: string): boolean {
	const hasAnimDictLoaded_result = Citizen.invokeNative<boolean>('0xE100DD4F82A51BDE', animDictionaryName);
	return hasAnimDictLoaded_result;
}