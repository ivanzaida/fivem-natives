/**
 * HUD:CLEAR_PED_IN_PAUSE_MENU
 *
 * 0x86CB46F43269108A

 * 
 * ------------------------------------------------------------------
 */
export function clearPedInPauseMenu(): void {
	const clearPedInPauseMenu_result = Citizen.invokeNative<void>('0x86CB46F43269108A', );
	return clearPedInPauseMenu_result;
}