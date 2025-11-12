/**
 * HUD:_SET_BLIP_GPS_ROUTE_DISPLAY_DISTANCE
 *
 * 0x25D984CFB64ED6DE

 * 
 * Applies to new eBlipParams _BLIP_CHANGE_46 and _BLIP_CHANGE_47
 * 
 * 
 * ------------------------------------------------------------------
 */
export function setBlipGpsRouteDisplayDistance(): void {
	const setBlipGpsRouteDisplayDistance_result = Citizen.invokeNative<void>('0x25D984CFB64ED6DE', );
	return setBlipGpsRouteDisplayDistance_result;
}