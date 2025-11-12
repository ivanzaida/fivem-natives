/**
 * HUD:PAUSE_TOGGLE_FULLSCREEN_MAP
 *
 * 0x437E61CD71AF1EBA

 * 
 * Use to allow spectator fullscreen viewing/navigation of race map
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} open
 */
export function pauseToggleFullscreenMap(open: boolean): void {
	const pauseToggleFullscreenMap_result = Citizen.invokeNative<void>('0x437E61CD71AF1EBA', open);
	return pauseToggleFullscreenMap_result;
}