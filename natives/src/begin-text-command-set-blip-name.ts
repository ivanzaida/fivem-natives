/**
 * HUD:BEGIN_TEXT_COMMAND_SET_BLIP_NAME
 *
 * 0xF3D182B81172EAB6

 * 
 * Starts a text command to change the name of a blip displayed in the pause menu.
 * This should be paired with `END_TEXT_COMMAND_SET_BLIP_NAME`, once adding all required text components.
 * Example:
 * 
 * HUD::BEGIN_TEXT_COMMAND_SET_BLIP_NAME("STRING");
 * HUD::ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME("Name");
 * HUD::END_TEXT_COMMAND_SET_BLIP_NAME(blip);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} mainTextLabel
 */
export function beginTextCommandSetBlipName(mainTextLabel: string): void {
	const beginTextCommandSetBlipName_result = Citizen.invokeNative<void>('0xF3D182B81172EAB6', mainTextLabel);
	return beginTextCommandSetBlipName_result;
}