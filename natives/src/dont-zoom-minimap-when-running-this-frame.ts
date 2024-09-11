/**
 * HUD:DONT_ZOOM_MINIMAP_WHEN_RUNNING_THIS_FRAME
 *
 * 0x19619CF6A5F4EE0A

 * 
 * ------------------------------------------------------------------
 */
export function dontZoomMinimapWhenRunningThisFrame(): void {
	const dontZoomMinimapWhenRunningThisFrame_result = Citizen.invokeNative<void>('0x19619CF6A5F4EE0A', );
	return dontZoomMinimapWhenRunningThisFrame_result;
}