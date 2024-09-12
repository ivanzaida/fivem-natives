/**
 * HUD:BEGIN_TEXT_COMMAND_OVERRIDE_BUTTON_TEXT
 *
 * 0xF394C416AB393C2D

 * 
 * ------------------------------------------------------------------
 * @param {string} mainTextLabel
 */
export function beginTextCommandOverrideButtonText(mainTextLabel: string): void {
	const beginTextCommandOverrideButtonText_result = Citizen.invokeNative<void>('0xF394C416AB393C2D', mainTextLabel);
	return beginTextCommandOverrideButtonText_result;
}