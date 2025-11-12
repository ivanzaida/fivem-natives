/**
 * HUD:HIDE_HUD_AND_RADAR_THIS_FRAME
 *
 * 0x43AE50D2A33F6E2A

 * 
 * Must be called every frame
 * 
 * Hides HUD and radar this frame and prohibits switching to other weapons (or accessing the weapon wheel)
 * 
 * 
 * ------------------------------------------------------------------
 */
export function hideHudAndRadarThisFrame(): void {
	const hideHudAndRadarThisFrame_result = Citizen.invokeNative<void>('0x43AE50D2A33F6E2A', );
	return hideHudAndRadarThisFrame_result;
}