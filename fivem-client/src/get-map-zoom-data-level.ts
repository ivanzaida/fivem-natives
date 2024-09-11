import { FloatRef } from '@ivanzaida/structures'

/**
 * CFX:GET_MAP_ZOOM_DATA_LEVEL
 *
 * 0X1363A998

 * Returns the zoom level data by index from mapzoomdata.meta file.
 * 
 * ------------------------------------------------------------------
 * @param {number} index Zoom level index.
 * @param {FloatRef} zoomScale fZoomScale value. [Ref]
 * @param {FloatRef} zoomSpeed fZoomSpeed value. [Ref]
 * @param {FloatRef} scrollSpeed fScrollSpeed value. [Ref]
 * @param {FloatRef} tilesX vTiles X. [Ref]
 * @param {FloatRef} tilesY vTiles Y. [Ref]
 * @returns {boolean}  A boolean indicating TRUE if the data was received successfully.
 */
export function getMapZoomDataLevel(index: number, zoomScale: FloatRef /* ptr */, zoomSpeed: FloatRef /* ptr */, scrollSpeed: FloatRef /* ptr */, tilesX: FloatRef /* ptr */, tilesY: FloatRef /* ptr */): boolean {
	const getMapZoomDataLevel_result = Citizen.invokeNative<boolean>('0X1363A998', index, zoomScale.dataView, zoomSpeed.dataView, scrollSpeed.dataView, tilesX.dataView, tilesY.dataView);
	return getMapZoomDataLevel_result;
}