/**
 * HUD:UPDATE_RADAR_ZOOM_TO_BLIP
 *
 * 0x77C721059FFCEE39

 * 
 * Must be called sparingly as it re-inits the range check for a blip.  Call this if you are zoomed to a blip and the blip has moved and you want the minimap to re-zoom to it
 * 
 * Does nothing (it's a nullsub).
 * 
 * 
 * ------------------------------------------------------------------
 */
export function updateRadarZoomToBlip(): void {
	const updateRadarZoomToBlip_result = Citizen.invokeNative<void>('0x77C721059FFCEE39', );
	return updateRadarZoomToBlip_result;
}