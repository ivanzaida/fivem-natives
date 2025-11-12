/**
 * HUD:SET_RADAR_ZOOM
 *
 * 0x4D2F1CB87CBF249D

 * 
 * DP: I want to phase this out, please use SET_RADAR_ZOOM_PRECISE instead on any future use!
 * 
 * zoomLevel ranges from 0 to 1400 in R Scripts
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} zoomValue
 */
export function setRadarZoom(zoomValue: number): void {
	const setRadarZoom_result = Citizen.invokeNative<void>('0x4D2F1CB87CBF249D', zoomValue);
	return setRadarZoom_result;
}