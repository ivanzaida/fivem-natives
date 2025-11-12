/**
 * HUD:SET_GPS_CUSTOM_ROUTE_RENDER
 *
 * 0x6850C7B3D44B92DA

 * 
 * Once custom GPS route is defined (by whatever means) this sets it to render, or turns it off
 * 
 * radarThickness: The width of the GPS route on the radar
 * mapThickness: The width of the GPS route on the map
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} on
 * @param {number} routeWidthMiniMap
 * @param {number} routeWidthPauseMap
 */
export function setGpsCustomRouteRender(on: boolean, routeWidthMiniMap: number, routeWidthPauseMap: number): void {
	const setGpsCustomRouteRender_result = Citizen.invokeNative<void>('0x6850C7B3D44B92DA', on, routeWidthMiniMap, routeWidthPauseMap);
	return setGpsCustomRouteRender_result;
}