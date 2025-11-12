/**
 * STREAMING:REQUEST_ANIM_SET
 *
 * 0xA336AFF285251641

 * 
 * An animation set represents a defined group of animations that exist in one or more dictionaries
 * Requesting an anim set will automatically request all of the anim dictionaries the set references.
 * 
 * Starts loading the specified animation set. An animation set provides movement animations for a ped. See SET_PED_MOVEMENT_CLIPSET.
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} animSetName
 */
export function requestAnimSet(animSetName: string): void {
	const requestAnimSet_result = Citizen.invokeNative<void>('0xA336AFF285251641', animSetName);
	return requestAnimSet_result;
}