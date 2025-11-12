/**
 * HUD:SET_RADAR_ZOOM_TO_DISTANCE
 *
 * 0xD09188DB6289E413

 * 
 * Must be called every frame - keeps it locked to a blip
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} distance
 */
export function setRadarZoomToDistance(distance: number): void {
	const setRadarZoomToDistance_result = Citizen.invokeNative<void>('0xD09188DB6289E413', distance);
	return setRadarZoomToDistance_result;
}