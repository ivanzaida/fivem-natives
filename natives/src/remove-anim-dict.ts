/**
 * STREAMING:REMOVE_ANIM_DICT
 *
 * 0x268BE77F77533D03

 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} animDictionaryName
 */
export function removeAnimDict(animDictionaryName: string): void {
	const removeAnimDict_result = Citizen.invokeNative<void>('0x268BE77F77533D03', animDictionaryName);
	return removeAnimDict_result;
}