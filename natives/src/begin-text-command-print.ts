/**
 * HUD:BEGIN_TEXT_COMMAND_PRINT
 *
 * 0x17EA339F685C42D2

 * 
 * void ShowSubtitle(const char text)
 * {
 *   BEGIN_TEXT_COMMAND_PRINT("STRING");
 *  ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 *    END_TEXT_COMMAND_PRINT(2000, true);
 * }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} mainTextLabel
 */
export function beginTextCommandPrint(mainTextLabel: string): void {
	const beginTextCommandPrint_result = Citizen.invokeNative<void>('0x17EA339F685C42D2', mainTextLabel);
	return beginTextCommandPrint_result;
}