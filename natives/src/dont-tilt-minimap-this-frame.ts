/**
 * HUD:DONT_TILT_MINIMAP_THIS_FRAME
 *
 * 0x35380F6C70B9B01F

 * 
 * When calling this, the current frame will have the players "arrow icon" be focused on the dead center of the radar.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function dontTiltMinimapThisFrame(): void {
	const dontTiltMinimapThisFrame_result = Citizen.invokeNative<void>('0x35380F6C70B9B01F', );
	return dontTiltMinimapThisFrame_result;
}