/**
 * HUD:CUSTOM_MINIMAP_SET_ACTIVE
 *
 * 0xACFD9F78275919B3

 * 
 * If toggle is true, the map is shown in full screen
 * If toggle is false, the map is shown in normal mode
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} lock
 */
export function customMinimapSetActive(lock: boolean): void {
	const customMinimapSetActive_result = Citizen.invokeNative<void>('0xACFD9F78275919B3', lock);
	return customMinimapSetActive_result;
}