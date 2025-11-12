/**
 * STREAMING:REMOVE_ANIM_SET
 *
 * 0x13F0C01028B5EE7C

 * 
 * Unloads the specified animation set. An animation set provides movement animations for a ped. See SET_PED_MOVEMENT_CLIPSET.
 * 
 * Animation set and clip set are synonymous.
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} animSetName
 */
export function removeAnimSet(animSetName: string): void {
	const removeAnimSet_result = Citizen.invokeNative<void>('0x13F0C01028B5EE7C', animSetName);
	return removeAnimSet_result;
}