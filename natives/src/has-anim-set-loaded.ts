/**
 * STREAMING:HAS_ANIM_SET_LOADED
 *
 * 0x60C643DC13B0C72B

 * 
 * See the notes for REQUEST_ANIM_SET above
 * 
 * Gets whether the specified animation set has finished loading. An animation set provides movement animations for a ped. See SET_PED_MOVEMENT_CLIPSET.
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
 * @returns {boolean}  
 */
export function hasAnimSetLoaded(animSetName: string): boolean {
	const hasAnimSetLoaded_result = Citizen.invokeNative<boolean>('0x60C643DC13B0C72B', animSetName);
	return hasAnimSetLoaded_result;
}