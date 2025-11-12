/**
 * STREAMING:HAS_CLIP_SET_LOADED
 *
 * 0x8175BC6D49412468

 * 
 * See the notes for REQUEST_CLIP_SET above
 * 
 * Alias for HAS_ANIM_SET_LOADED.
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} animSetName
 * @returns {boolean}  
 */
export function hasClipSetLoaded(animSetName: string): boolean {
	const hasClipSetLoaded_result = Citizen.invokeNative<boolean>('0x8175BC6D49412468', animSetName);
	return hasClipSetLoaded_result;
}