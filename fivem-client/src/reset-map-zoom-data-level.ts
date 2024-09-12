/**
 * CFX:RESET_MAP_ZOOM_DATA_LEVEL
 *
 * 0X11A5B7ED

 * Resets values from the zoom level data by index to defaults from mapzoomdata.meta.
 * 
 * ------------------------------------------------------------------
 * @param {number} index Zoom level index.
 */
export function resetMapZoomDataLevel(index: number): void {
	const resetMapZoomDataLevel_result = Citizen.invokeNative<void>('0X11A5B7ED', index);
	return resetMapZoomDataLevel_result;
}