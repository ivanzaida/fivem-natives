/**
 * HUD:HIDE_MINIMAP_INTERIOR_MAP_THIS_FRAME
 *
 * 0xE1945100CB123CBF

 * 
 * ------------------------------------------------------------------
 */
export function hideMinimapInteriorMapThisFrame(): void {
	const hideMinimapInteriorMapThisFrame_result = Citizen.invokeNative<void>('0xE1945100CB123CBF', );
	return hideMinimapInteriorMapThisFrame_result;
}