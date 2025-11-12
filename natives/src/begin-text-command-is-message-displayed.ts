/**
 * HUD:BEGIN_TEXT_COMMAND_IS_MESSAGE_DISPLAYED
 *
 * 0x32A590914F10401C

 * 
 * nothin doin.
 * 
 * BOOL Message(const char text)
 *    {
 *      BEGIN_TEXT_COMMAND_IS_MESSAGE_DISPLAYED("STRING");
 *       ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 *        return END_TEXT_COMMAND_IS_MESSAGE_DISPLAYED();
 *    }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} mainTextLabel
 */
export function beginTextCommandIsMessageDisplayed(mainTextLabel: string): void {
	const beginTextCommandIsMessageDisplayed_result = Citizen.invokeNative<void>('0x32A590914F10401C', mainTextLabel);
	return beginTextCommandIsMessageDisplayed_result;
}