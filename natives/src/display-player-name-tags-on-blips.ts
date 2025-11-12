/**
 * HUD:DISPLAY_PLAYER_NAME_TAGS_ON_BLIPS
 *
 * 0x0C0BAEDD9DE7567B

 * 
 * Toggles whether or not name labels are shown on the expanded minimap next to player blips, like in GTA:O.
 * Doesn't need to be called every frame.
 * Preview: https://i.imgur.com/DfqKWfJ.png
 * 
 * Make sure to call SET_BLIP_CATEGORY with index 7 for this to work on the desired blip.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} displayTags
 */
export function displayPlayerNameTagsOnBlips(displayTags: boolean): void {
	const displayPlayerNameTagsOnBlips_result = Citizen.invokeNative<void>('0x0C0BAEDD9DE7567B', displayTags);
	return displayPlayerNameTagsOnBlips_result;
}