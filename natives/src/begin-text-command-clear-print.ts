/**
 * HUD:BEGIN_TEXT_COMMAND_CLEAR_PRINT
 *
 * 0x7C59282918D59E1B

 * 
 * clears a print text command with this text
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} mainTextLabel
 */
export function beginTextCommandClearPrint(mainTextLabel: string): void {
	const beginTextCommandClearPrint_result = Citizen.invokeNative<void>('0x7C59282918D59E1B', mainTextLabel);
	return beginTextCommandClearPrint_result;
}