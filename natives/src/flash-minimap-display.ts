/**
 * HUD:FLASH_MINIMAP_DISPLAY
 *
 * 0x2716F9D3A99349AB

 * 
 * flashes the minimap display white
 * 
 * adds a short flash to the Radar/Minimap
 * Usage: UI.FLASH_MINIMAP_DISPLAY
 * 
 * 
 * ------------------------------------------------------------------
 */
export function flashMinimapDisplay(): void {
	const flashMinimapDisplay_result = Citizen.invokeNative<void>('0x2716F9D3A99349AB', );
	return flashMinimapDisplay_result;
}