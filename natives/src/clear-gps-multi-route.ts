/**
 * HUD:CLEAR_GPS_MULTI_ROUTE
 *
 * 0xC3C7C9791CD79114

 * 
 * Removes the multi-route
 * 
 * Does the same as SET_GPS_MULTI_ROUTE_RENDER(false);
 * 
 * 
 * ------------------------------------------------------------------
 */
export function clearGpsMultiRoute(): void {
	const clearGpsMultiRoute_result = Citizen.invokeNative<void>('0xC3C7C9791CD79114', );
	return clearGpsMultiRoute_result;
}