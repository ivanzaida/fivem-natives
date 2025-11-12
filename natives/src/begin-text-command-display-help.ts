/**
 * HUD:BEGIN_TEXT_COMMAND_DISPLAY_HELP
 *
 * 0xAC98CA65AD9A3215

 * 
 * Used to be known as _SET_TEXT_COMPONENT_FORMAT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} mainTextLabel
 */
export function beginTextCommandDisplayHelp(mainTextLabel: string): void {
	const beginTextCommandDisplayHelp_result = Citizen.invokeNative<void>('0xAC98CA65AD9A3215', mainTextLabel);
	return beginTextCommandDisplayHelp_result;
}