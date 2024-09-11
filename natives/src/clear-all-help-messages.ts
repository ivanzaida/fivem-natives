/**
 * HUD:CLEAR_ALL_HELP_MESSAGES
 *
 * 0xAD01710361B8BCF5

 * 
 * ------------------------------------------------------------------
 */
export function clearAllHelpMessages(): void {
	const clearAllHelpMessages_result = Citizen.invokeNative<void>('0xAD01710361B8BCF5', );
	return clearAllHelpMessages_result;
}