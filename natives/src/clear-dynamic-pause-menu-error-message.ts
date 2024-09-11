/**
 * HUD:CLEAR_DYNAMIC_PAUSE_MENU_ERROR_MESSAGE
 *
 * 0x8606422BE9CB6EFC

 * 
 * ------------------------------------------------------------------
 */
export function clearDynamicPauseMenuErrorMessage(): void {
	const clearDynamicPauseMenuErrorMessage_result = Citizen.invokeNative<void>('0x8606422BE9CB6EFC', );
	return clearDynamicPauseMenuErrorMessage_result;
}