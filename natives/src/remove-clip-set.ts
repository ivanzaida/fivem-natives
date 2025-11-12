/**
 * STREAMING:REMOVE_CLIP_SET
 *
 * 0x9B64A44D0B8D7CF6

 * 
 * Alias for REMOVE_ANIM_SET.
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} animSetName
 */
export function removeClipSet(animSetName: string): void {
	const removeClipSet_result = Citizen.invokeNative<void>('0x9B64A44D0B8D7CF6', animSetName);
	return removeClipSet_result;
}