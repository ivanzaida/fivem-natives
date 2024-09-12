/**
 * HUD:DONT_ZOOM_MINIMAP_WHEN_SNIPING_THIS_FRAME
 *
 * 0x6A666C5DD5D6F94E

 * 
 * ------------------------------------------------------------------
 */
export function dontZoomMinimapWhenSnipingThisFrame(): void {
	const dontZoomMinimapWhenSnipingThisFrame_result = Citizen.invokeNative<void>('0x6A666C5DD5D6F94E', );
	return dontZoomMinimapWhenSnipingThisFrame_result;
}