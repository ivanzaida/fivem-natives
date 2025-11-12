/**
 * PATHFIND:GET_GPS_BLIP_ROUTE_FOUND
 *
 * 0x1A9014F37459E83F

 * 
 * Find whether the gps blip route has been found and is displaying on the gps
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getGpsBlipRouteFound(): boolean {
	const getGpsBlipRouteFound_result = Citizen.invokeNative<boolean>('0x1A9014F37459E83F', );
	return getGpsBlipRouteFound_result;
}