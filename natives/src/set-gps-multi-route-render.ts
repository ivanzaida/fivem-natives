/**
 * HUD:SET_GPS_MULTI_ROUTE_RENDER
 *
 * 0x0F20DD0DCEB2959F

 * 
 * Starts display of the multi-route
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} on
 */
export function setGpsMultiRouteRender(on: boolean): void {
	const setGpsMultiRouteRender_result = Citizen.invokeNative<void>('0x0F20DD0DCEB2959F', on);
	return setGpsMultiRouteRender_result;
}