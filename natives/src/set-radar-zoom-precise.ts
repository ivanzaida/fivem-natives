/**
 * HUD:SET_RADAR_ZOOM_PRECISE
 *
 * 0xC4C6378884E06FBD

 * 
 * Must be called every frame
 * 
 * zoom ranges from 0 to 90f in R Scripts
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} zoomValue
 */
export function setRadarZoomPrecise(zoomValue: number): void {
	const setRadarZoomPrecise_result = Citizen.invokeNative<void>('0xC4C6378884E06FBD', zoomValue);
	return setRadarZoomPrecise_result;
}