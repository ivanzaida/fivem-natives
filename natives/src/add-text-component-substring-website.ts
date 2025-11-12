/**
 * HUD:ADD_TEXT_COMPONENT_SUBSTRING_WEBSITE
 *
 * 0x74E878E9E51685BE

 * 
 * This native (along with ADD_TEXT_COMPONENT_SUBSTRING_KEYBOARD_DISPLAY and ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME) do not actually filter anything. They simply add the provided text (as of 944)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} website
 */
export function addTextComponentSubstringWebsite(website: string): void {
	const addTextComponentSubstringWebsite_result = Citizen.invokeNative<void>('0x74E878E9E51685BE', website);
	return addTextComponentSubstringWebsite_result;
}