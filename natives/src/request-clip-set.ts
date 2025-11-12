/**
 * STREAMING:REQUEST_CLIP_SET
 *
 * 0x73DEEAB0747FB17C

 * 
 * An animation set represents a defined group of animations that exist in one or more dictionaries
 * Requesting an anim set will automatically request all of the anim dictionaries the set references.
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} animSetName
 */
export function requestClipSet(animSetName: string): void {
	const requestClipSet_result = Citizen.invokeNative<void>('0x73DEEAB0747FB17C', animSetName);
	return requestClipSet_result;
}