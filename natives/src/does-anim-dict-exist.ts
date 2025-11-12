/**
 * STREAMING:DOES_ANIM_DICT_EXIST
 *
 * 0xBBE75ED2B58BB1F7

 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} animSetName
 * @returns {boolean}  
 */
export function doesAnimDictExist(animSetName: string): boolean {
	const doesAnimDictExist_result = Citizen.invokeNative<boolean>('0xBBE75ED2B58BB1F7', animSetName);
	return doesAnimDictExist_result;
}