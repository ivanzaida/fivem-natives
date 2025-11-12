/**
 * STREAMING:REQUEST_ANIM_DICT
 *
 * 0x80813AC549A1E8AE

 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} animDictionaryName
 */
export function requestAnimDict(animDictionaryName: string): void {
	const requestAnimDict_result = Citizen.invokeNative<void>('0x80813AC549A1E8AE', animDictionaryName);
	return requestAnimDict_result;
}