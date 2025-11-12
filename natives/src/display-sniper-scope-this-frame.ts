/**
 * HUD:DISPLAY_SNIPER_SCOPE_THIS_FRAME
 *
 * 0x62E5C1180798DAB7

 * 
 * Must be called every frame
 * 
 * Displays the crosshair for this frame.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function displaySniperScopeThisFrame(): void {
	const displaySniperScopeThisFrame_result = Citizen.invokeNative<void>('0x62E5C1180798DAB7', );
	return displaySniperScopeThisFrame_result;
}