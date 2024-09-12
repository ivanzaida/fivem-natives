/**
 * HUD:DISPLAY_HUD_WHEN_PAUSED_THIS_FRAME
 *
 * 0x915CC2D1BD15DFDF

 * 
 * ------------------------------------------------------------------
 */
export function displayHudWhenPausedThisFrame(): void {
	const displayHudWhenPausedThisFrame_result = Citizen.invokeNative<void>('0x915CC2D1BD15DFDF', );
	return displayHudWhenPausedThisFrame_result;
}