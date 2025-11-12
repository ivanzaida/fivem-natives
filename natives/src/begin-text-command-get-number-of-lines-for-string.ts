/**
 * HUD:BEGIN_TEXT_COMMAND_GET_NUMBER_OF_LINES_FOR_STRING
 *
 * 0x012F78DEB1F1AF9C

 * 
 * int GetLineCount(char text, float x, float y)
 *     {
 *      BEGIN_TEXT_COMMAND_GET_NUMBER_OF_LINES_FOR_STRING("STRING");
 *                 ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 *       return BEGIN_TEXT_COMMAND_GET_NUMBER_OF_LINES_FOR_STRING(x, y);
 *     }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} mainTextLabel
 */
export function beginTextCommandGetNumberOfLinesForString(mainTextLabel: string): void {
	const beginTextCommandGetNumberOfLinesForString_result = Citizen.invokeNative<void>('0x012F78DEB1F1AF9C', mainTextLabel);
	return beginTextCommandGetNumberOfLinesForString_result;
}