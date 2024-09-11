/**
 * HUD:HIDE_MINIMAP_EXTERIOR_MAP_THIS_FRAME
 *
 * 0x2102B34A7006F6C9

 * 
 * ------------------------------------------------------------------
 */
export function hideMinimapExteriorMapThisFrame(): void {
	const hideMinimapExteriorMapThisFrame_result = Citizen.invokeNative<void>('0x2102B34A7006F6C9', );
	return hideMinimapExteriorMapThisFrame_result;
}