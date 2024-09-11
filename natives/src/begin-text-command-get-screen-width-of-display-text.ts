/**
 * HUD:BEGIN_TEXT_COMMAND_GET_SCREEN_WIDTH_OF_DISPLAY_TEXT
 *
 * 0x282D5DA1EE14950F

 * 
 * ------------------------------------------------------------------
 * @param {string} mainTextLabel
 */
export function beginTextCommandGetScreenWidthOfDisplayText(mainTextLabel: string): void {
	const beginTextCommandGetScreenWidthOfDisplayText_result = Citizen.invokeNative<void>('0x282D5DA1EE14950F', mainTextLabel);
	return beginTextCommandGetScreenWidthOfDisplayText_result;
}