/**
 * CFX:SET_MAP_ZOOM_DATA_LEVEL
 *
 * 0X447C718E

 * Sets values to the zoom level data by index.
 * 
 * ------------------------------------------------------------------
 * @param {number} index Zoom level index.
 * @param {number} zoomScale fZoomScale value.
 * @param {number} zoomSpeed fZoomSpeed value.
 * @param {number} scrollSpeed fScrollSpeed value.
 * @param {number} tilesX vTiles X.
 * @param {number} tilesY vTiles Y.
 */
export function setMapZoomDataLevel(index: number, zoomScale: number, zoomSpeed: number, scrollSpeed: number, tilesX: number, tilesY: number): void {
	const setMapZoomDataLevel_result = Citizen.invokeNative<void>('0X447C718E', index, zoomScale, zoomSpeed, scrollSpeed, tilesX, tilesY);
	return setMapZoomDataLevel_result;
}